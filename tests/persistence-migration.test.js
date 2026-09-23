const { test } = require('node:test');
const assert = require('node:assert');
const path = require('node:path');
const { chromium } = require('playwright');

test('Persistence & Migration: Non-Destructive Legacy Grimoire Migration and IndexedDB Storage', async (t) => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const indexPath = 'file://' + path.resolve(__dirname, '../index.html');

  // Pre-seed localStorage with legacy entries before first navigation
  await page.addInitScript(() => {
    const legacyEntries = [
      {
        id: 'legacy-entry-001',
        title: 'Ancient Rite of Transmutation',
        content: 'Historical entry recorded under legacy Homo Goetia v1.',
        date: '10/31/2024'
      }
    ];
    localStorage.setItem('hg_grimoire_entries', JSON.stringify(legacyEntries));
  });

  await page.goto(indexPath);

  const skipBtn = await page.$('#btn-portal-skip');
  if (skipBtn && await skipBtn.isVisible()) {
    await skipBtn.click();
  }

  // Wait for storage initialization and migration
  await page.waitForTimeout(600);

  // 1. Verify legacy entries are still preserved in localStorage (non-destructive)
  const rawLegacy = await page.evaluate(() => localStorage.getItem('hg_grimoire_entries'));
  assert.ok(rawLegacy, 'localStorage hg_grimoire_entries must NOT be deleted upon migration');
  const parsedLegacy = JSON.parse(rawLegacy);
  assert.strictEqual(parsedLegacy.length, 1);
  assert.strictEqual(parsedLegacy[0].id, 'legacy-entry-001');

  // 2. Verify legacy entry was migrated into journal storage
  const journalEntries = await page.evaluate(async () => {
    return await window.app.storage.getAllJournalEntries();
  });
  const foundMigrated = journalEntries.find(j => j.id === 'legacy-entry-001');
  assert.ok(foundMigrated, 'Legacy entry should be present in journal storage');
  assert.strictEqual(foundMigrated.title, 'Ancient Rite of Transmutation');

  // 3. Test creating a new journal entry and verify reload persistence
  await page.evaluate(() => {
    window.app.switchDomain('grimoire');
    window.app.setGrimoireView('journal');
    window.app.safeGet('grimoire-title').value = 'New Sovereign Record';
    window.app.safeGet('grimoire-content').value = 'This is a test record for persistence.';
    window.app.saveGrimoireEntry();
  });

  // Reload page
  await page.reload();
  const skipBtn2 = await page.$('#btn-portal-skip');
  if (skipBtn2 && await skipBtn2.isVisible()) {
    await skipBtn2.click();
  }
  await page.waitForTimeout(600);

  const reloadedJournal = await page.evaluate(async () => {
    return await window.app.storage.getAllJournalEntries();
  });
  const foundNew = reloadedJournal.find(j => j.title === 'New Sovereign Record');
  assert.ok(foundNew, 'New journal entry must persist across page reload');

  await browser.close();
});

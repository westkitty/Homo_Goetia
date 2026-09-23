const { test } = require('node:test');
const assert = require('node:assert');
const path = require('node:path');
const { chromium } = require('playwright');

test('Ritual Engine: Full Lifecycle (Declare Intent -> Stepping -> Artifact -> Pause/Resume -> Reload -> Seal)', async (t) => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const indexPath = 'file://' + path.resolve(__dirname, '../index.html');
  await page.goto(indexPath);

  const skipBtn = await page.$('#btn-portal-skip');
  if (skipBtn && await skipBtn.isVisible()) {
    await skipBtn.click();
  }

  // Clear any existing rituals to guarantee clean test isolation
  await page.evaluate(async () => {
    const all = await window.app.storage.getAllRituals();
    for (const r of all) await window.app.storage.deleteItem('rituals', r.id);
  });

  // 1. Declare Intent and Start Composition on Altar
  await page.evaluate(() => window.app.switchDomain('altar'));
  await page.fill('#input-ritual-intent', 'I sever all external psychic bonds.');

  // Click Severance composition card
  const severCard = await page.$('.composition-card');
  assert.ok(severCard, 'Severance composition card should exist');
  await severCard.click();

  // 2. Verify Active Banner is displayed
  await page.evaluate(() => window.app.switchDomain('altar'));
  const bannerVisible = await page.$eval('#altar-active-ritual-banner', el => el.style.display !== 'none');
  assert.strictEqual(bannerVisible, true, 'Active ritual banner should be visible');

  const ritualTitle = await page.$eval('#active-ritual-title', el => el.innerText);
  assert.ok(ritualTitle.includes('Severance'), 'Active ritual title should include Severance');

  // 3. Complete Stage 1 and Record Artifact
  await page.evaluate(async () => {
    await window.app.ritualEngine.recordArtifact('sigil', 'Severance Crucible', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==', {
      source: 'test'
    });
    await window.app.ritualEngine.completeCurrentStage('Purged space');
  });

  const activeSession = await page.evaluate(() => window.app.ritualEngine.activeRitual);
  assert.ok(activeSession, 'Active session should exist');
  assert.strictEqual(activeSession.stages[0].status, 'completed', 'Stage 1 should be completed');
  assert.strictEqual(activeSession.artifacts.length, 1, 'Session should have 1 recorded artifact');

  // 4. Pause Ritual
  await page.evaluate(async () => {
    await window.app.ritualEngine.togglePause();
  });
  const isPaused = await page.evaluate(() => window.app.ritualEngine.activeRitual.status);
  assert.strictEqual(isPaused, 'paused', 'Ritual should be in paused state');

  // 5. Reload Page and verify state persistence
  await page.reload();
  const skipBtnAfterReload = await page.$('#btn-portal-skip');
  if (skipBtnAfterReload && await skipBtnAfterReload.isVisible()) {
    await skipBtnAfterReload.click();
  }

  // Wait for storage initialization
  await page.waitForTimeout(500);
  const reloadedSession = await page.evaluate(() => window.app.ritualEngine.activeRitual);
  assert.ok(reloadedSession, 'Active/paused session should persist across page reload');
  assert.strictEqual(reloadedSession.status, 'paused', 'Session should still be paused after reload');

  // 6. Resume and Seal Ritual
  await page.evaluate(async () => {
    await window.app.ritualEngine.togglePause();
    await window.app.ritualEngine.sealActiveRitual();
  });

  const activeAfterSeal = await page.evaluate(() => window.app.ritualEngine.activeRitual);
  assert.strictEqual(activeAfterSeal, null, 'Active ritual should be null after sealing');

  // 7. Verify sealed ritual appears in Grimoire sessions
  const sealedRituals = await page.evaluate(async () => {
    return await window.app.storage.getSealedRituals();
  });
  assert.ok(sealedRituals.length >= 1, 'At least 1 sealed ritual should exist in storage');
  assert.strictEqual(sealedRituals[0].status, 'sealed', 'Ritual status should be sealed');

  // 8. Verify Living Seal has updated layer count
  const layerCount = await page.evaluate(() => window.app.livingSeal.maxLayers);
  assert.ok(layerCount >= 1, 'Living Seal should have at least 1 layer corresponding to sealed ritual');

  // Clean up rituals after test
  await page.evaluate(async () => {
    const all = await window.app.storage.getAllRituals();
    for (const r of all) await window.app.storage.deleteItem('rituals', r.id);
  });

  await browser.close();
});

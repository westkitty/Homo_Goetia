const { test } = require('node:test');
const assert = require('node:assert');
const path = require('node:path');
const { chromium } = require('playwright');

test('Navigation: 5-Domain Architecture and Chamber Command Palette (Cmd+K)', async (t) => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const indexPath = 'file://' + path.resolve(__dirname, '../index.html');
  await page.goto(indexPath);

  const skipBtn = await page.$('#btn-portal-skip');
  if (skipBtn && await skipBtn.isVisible()) {
    await skipBtn.click();
  }

  // 1. Test Domain Navigation
  const domains = ['altar', 'archive', 'forge', 'chambers', 'grimoire'];
  for (const domain of domains) {
    const pill = await page.$(`.domain-pill[data-domain="${domain}"]`);
    assert.ok(pill, `Domain pill for ${domain} should exist`);
    await pill.click();

    // Verify domain pill active state
    const isActive = await page.$eval(`.domain-pill[data-domain="${domain}"]`, el => el.classList.contains('active'));
    assert.strictEqual(isActive, true, `Domain pill for ${domain} should have .active class`);

    // Verify corresponding panel is active
    const expectedTabId = domain === 'altar' ? 'altar-tab'
      : domain === 'archive' ? 'archive-overview-tab'
      : domain === 'forge' ? 'forge-overview-tab'
      : domain === 'chambers' ? 'chambers-overview-tab'
      : 'grimoire-journal-tab';

    const panelActive = await page.$eval(`#${expectedTabId}`, el => el.classList.contains('active'));
    assert.strictEqual(panelActive, true, `Panel #${expectedTabId} should be active for domain ${domain}`);
  }

  // 2. Test Chamber Command Palette (Cmd+K / #btn-open-palette)
  const cmdBtn = await page.$('#btn-open-palette') || await page.$('#btn-cmd-palette');
  assert.ok(cmdBtn, 'Command palette button should exist in top domain bar');
  await cmdBtn.click();

  const modalOpen = await page.$eval('#chamber-palette-modal', el => el.classList.contains('open'));
  assert.strictEqual(modalOpen, true, 'Command palette modal should have .open class on click');

  // Filter for Astrolabe
  await page.fill('#chamber-palette-input', 'Astrolabe');
  const paletteItems = await page.$$('.chamber-palette-item');
  assert.ok(paletteItems.length > 0, 'Palette should return matching chambers for "Astrolabe"');

  // Click first matching item
  await paletteItems[0].click();

  // Verify modal is closed and Astrolabe chamber is active
  const modalClosed = await page.$eval('#chamber-palette-modal', el => !el.classList.contains('open'));
  assert.strictEqual(modalClosed, true, 'Command palette modal should close after item selection');

  const astrolabeActive = await page.$eval('#astrolabe-tab', el => el.classList.contains('active'));
  assert.strictEqual(astrolabeActive, true, '#astrolabe-tab should be active after jumping from command palette');

  // 3. Test keyboard shortcut (Meta+K)
  await page.keyboard.press('Meta+k');
  const modalOpenByShortcut = await page.$eval('#chamber-palette-modal', el => el.classList.contains('open'));
  assert.strictEqual(modalOpenByShortcut, true, 'Command palette modal should open via Meta+K shortcut');

  // Close by Escape
  await page.keyboard.press('Escape');
  const modalClosedByEsc = await page.$eval('#chamber-palette-modal', el => !el.classList.contains('open'));
  assert.strictEqual(modalClosedByEsc, true, 'Command palette modal should close on Escape key');

  await browser.close();
});

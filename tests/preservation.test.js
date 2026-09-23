const { test } = require('node:test');
const assert = require('node:assert');
const path = require('node:path');
const { chromium } = require('playwright');

test('Preservation: All 32 Chambers and Core Systems Remain Intact and Functional', async (t) => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  const indexPath = 'file://' + path.resolve(__dirname, '../index.html');
  await page.goto(indexPath);

  // Skip entrance portal if visible
  const skipBtn = await page.$('#btn-portal-skip');
  if (skipBtn && await skipBtn.isVisible()) {
    await skipBtn.click();
  }

  // 1. Verify all 32 chamber tab-panels exist in DOM
  const chamberIds = [
    'altar-tab',
    'forge-sigil-tab',
    'forge-dice-tab',
    'grimoire-transmuter-tab',
    'library-solomon-tab',
    'library-tarot-tab',
    'library-tenets-tab',
    'sanctum-mixer-tab',
    'sanctum-timer-tab',
    'library-journey-tab',
    'grimoire-journal-tab',
    'banish-tab',
    'astrolabe-tab',
    'demonology-tab',
    'cipher-tab',
    'pact-tab',
    'incense-tab',
    'echoes-tab',
    'mirror-tab',
    'charging-tab',
    'scryer-tab',
    'trivia-tab',
    'smoke-serpent-tab',
    'smoke-brimstone-tab',
    'smoke-dragon-tab',
    'smoke-transmute-tab',
    'smoke-banish-tab',
    'desire-bond-tab',
    'desire-shadow-tab',
    'desire-astrolabe-tab',
    'desire-devotion-tab',
    'desire-edging-tab'
  ];

  for (const id of chamberIds) {
    const el = await page.$(`#${id}`);
    assert.ok(el, `Expected chamber #${id} to exist in DOM`);
  }

  // 2. Verify representative tool 1: Sigil Forge
  await page.evaluate(() => window.app.switchTab('forge-sigil'));
  const sigilCanvas = await page.$('#sigil-canvas');
  assert.ok(sigilCanvas, 'Sigil canvas should exist');
  await page.fill('#sigil-intent', 'LUCIFER AUTONOMY');
  await page.click('#btn-forge-sigil');

  // 3. Verify representative tool 2: Tarot Oracle
  await page.evaluate(() => window.app.switchTab('library-tarot'));
  const drawTarotBtn = await page.$('#btn-draw-tarot');
  assert.ok(drawTarotBtn, 'Tarot draw button should exist');
  await drawTarotBtn.click();
  await page.click('#tarot-card-1');
  const card1Flipped = await page.$eval('#tarot-card-1', el => el.classList.contains('flipped'));
  assert.strictEqual(card1Flipped, true, 'Tarot card 1 should flip on click');

  // 4. Verify representative tool 3: Solomonic Archives
  await page.evaluate(() => window.app.switchTab('library-solomon'));
  const solomonSearch = await page.$('#solomon-search');
  assert.ok(solomonSearch, 'Solomon search input should exist');
  await page.fill('#solomon-search', 'Bael');
  const solomonListText = await page.$eval('#solomon-entries-list', el => el.innerText);
  assert.ok(solomonListText.includes('Bael'), 'Bael should appear in filtered Solomon list');

  // 5. Verify zero critical console errors
  assert.deepStrictEqual(consoleErrors, [], `Unexpected browser console errors: ${consoleErrors.join(', ')}`);

  await browser.close();
});

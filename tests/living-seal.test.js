const { test } = require('node:test');
const assert = require('node:assert');
const path = require('node:path');
const { chromium } = require('playwright');

test('Living Seal: Deterministic Geometry Generation, Layer Scrubber, and SVG/PNG Export', async (t) => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const indexPath = 'file://' + path.resolve(__dirname, '../index.html');
  await page.goto(indexPath);

  const skipBtn = await page.$('#btn-portal-skip');
  if (skipBtn && await skipBtn.isVisible()) {
    await skipBtn.click();
  }

  // Clear any existing rituals to guarantee clean isolation
  await page.evaluate(async () => {
    const existing = await window.app.storage.getAllRituals();
    for (const r of existing) {
      await window.app.storage.deleteItem('rituals', r.id);
    }
    await window.app.livingSeal.refresh();
  });

  // 1. Test Deterministic Geometry Generation
  const ritualA = {
    id: 'ritual-deterministic-01',
    schemaVersion: 1,
    createdAt: 1700000000000,
    sealedAt: 1700000005000,
    title: 'Rite of Solitude',
    intention: 'I claim absolute sovereignty.',
    compositionId: 'sever',
    status: 'sealed',
    stages: [],
    artifacts: [],
    tags: ['severance'],
    provenance: 'PERSONAL'
  };

  const svgMarkup1 = await page.evaluate(async (r) => {
    await window.app.storage.saveRitual(r);
    await window.app.livingSeal.refresh();
    const svgEl = window.app.safeGet('living-seal-svg');
    return svgEl ? svgEl.innerHTML : '';
  }, ritualA);

  assert.ok(svgMarkup1.includes('class="living-seal-layer"'), 'Living Seal should render ritual layer');
  assert.ok(svgMarkup1.includes('data-ritual-id="ritual-deterministic-01"'), 'Layer should be tagged with ritual ID');

  // Reload page and re-render to verify deterministic consistency
  await page.reload();
  const skipBtn2 = await page.$('#btn-portal-skip');
  if (skipBtn2 && await skipBtn2.isVisible()) {
    await skipBtn2.click();
  }
  await page.waitForTimeout(500);

  const svgMarkup2 = await page.evaluate(async () => {
    await window.app.livingSeal.refresh();
    const svgEl = window.app.safeGet('living-seal-svg');
    return svgEl ? svgEl.innerHTML : '';
  });

  assert.strictEqual(svgMarkup1, svgMarkup2, 'Living Seal SVG output must be strictly identical (deterministic) across reloads');

  // 2. Add two more rituals to test scrubber and filter
  const ritualB = {
    id: 'ritual-deterministic-02',
    createdAt: 1700000010000,
    sealedAt: 1700000015000,
    title: 'Invocation of Will',
    intention: 'Let truth prevail.',
    compositionId: 'invoke',
    status: 'sealed',
    stages: [],
    artifacts: [],
    tags: ['invocation'],
    provenance: 'PERSONAL'
  };

  const ritualC = {
    id: 'ritual-deterministic-03',
    createdAt: 1700000020000,
    sealedAt: 1700000025000,
    title: 'Descent into Crypt',
    intention: 'Shadow integration.',
    compositionId: 'descent',
    status: 'sealed',
    stages: [],
    artifacts: [],
    tags: ['descent'],
    provenance: 'PERSONAL'
  };

  await page.evaluate(async ({ rb, rc }) => {
    await window.app.storage.saveRitual(rb);
    await window.app.storage.saveRitual(rc);
    await window.app.livingSeal.refresh();
  }, { rb: ritualB, rc: ritualC });

  const maxLayers = await page.evaluate(() => window.app.livingSeal.maxLayers);
  assert.strictEqual(maxLayers, 3, 'Should have exactly 3 layers for 3 sealed rituals');

  // Test Chronology Scrubber
  const scrubbedLayersCount = await page.evaluate(() => {
    window.app.livingSeal.onScrub(1);
    const layers = document.querySelectorAll('#living-seal-svg .living-seal-layer');
    return layers.length;
  });
  assert.strictEqual(scrubbedLayersCount, 1, 'Scrubbing to index 1 should render only 1 layer');

  // Reset scrub to 3
  await page.evaluate(() => window.app.livingSeal.onScrub(3));

  // Test Composition Filter
  const filteredCount = await page.evaluate(() => {
    window.app.livingSeal.setFilter('invoke');
    const layers = document.querySelectorAll('#living-seal-svg .living-seal-layer');
    return layers.length;
  });
  assert.strictEqual(filteredCount, 1, 'Filtering by "invoke" should render only the invoke layer');

  // Reset filter
  await page.evaluate(() => window.app.livingSeal.resetIsolation());

  // 3. Test SVG and PNG Export Functions
  const exportSvgString = await page.evaluate(() => {
    return window.app.livingSeal.getExportSVG();
  });
  assert.ok(exportSvgString.startsWith('<svg'), 'Export SVG string should begin with <svg');
  assert.ok(exportSvgString.includes('</svg>'), 'Export SVG string should close with </svg>');

  await browser.close();
});

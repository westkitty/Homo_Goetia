const { test } = require('node:test');
const assert = require('node:assert');
const path = require('node:path');
const fs = require('node:fs');
const { chromium } = require('playwright');

test('Offline & Privacy: Standalone Offline Build Zero External Requests', async (t) => {
  const offlinePath = path.resolve(__dirname, '../index_offline.html');
  assert.ok(fs.existsSync(offlinePath), 'index_offline.html must exist');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const externalRequests = [];
  page.on('request', req => {
    const url = req.url();
    if (!url.startsWith('file:') && !url.startsWith('data:')) {
      externalRequests.push(url);
    }
  });

  await page.goto('file://' + offlinePath);

  // Skip entrance portal if visible
  const skipBtn = await page.$('#btn-portal-skip');
  if (skipBtn && await skipBtn.isVisible()) {
    await skipBtn.click();
  }

  // Verify no external requests (especially Google Fonts) occurred
  assert.deepStrictEqual(externalRequests, [], `Detected unauthorized external network requests: ${externalRequests.join(', ')}`);

  // Verify app is initialized
  const isAppReady = await page.evaluate(() => typeof window.app !== 'undefined');
  assert.strictEqual(isAppReady, true, 'InfernalTempleApp must be instantiated offline');

  // Verify domain navigation works offline
  await page.evaluate(() => window.app.switchDomain('forge'));
  await page.waitForSelector('#forge-overview-tab.active');
  const forgeActive = await page.$eval('#forge-overview-tab', el => el.classList.contains('active'));
  assert.strictEqual(forgeActive, true, 'Forge domain overview should activate offline');

  // Verify Living Seal renders offline
  await page.evaluate(() => window.app.switchDomain('altar'));
  const sealRendered = await page.$eval('#living-seal-svg', el => el.children.length > 0);
  assert.strictEqual(sealRendered, true, 'Living Seal SVG must render layers offline');

  await browser.close();
});

const { test } = require('node:test');
const assert = require('node:assert');
const path = require('node:path');
const { chromium, devices } = require('playwright');

test('Mobile Responsiveness: 390x844 Viewport, Bottom Navigation, Drawer Toggle, and Pointer Event Drawing', async (t) => {
  const browser = await chromium.launch({ headless: true });
  // iPhone 13/14/15 viewport: 390 x 844
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1',
    isMobile: true,
    hasTouch: true
  });
  const page = await context.newPage();

  const indexPath = 'file://' + path.resolve(__dirname, '../index.html');
  await page.goto(indexPath);

  const skipBtn = await page.$('#btn-portal-skip');
  if (skipBtn && await skipBtn.isVisible()) {
    await skipBtn.click();
  }

  // 1. Verify mobile bottom bar is visible
  const bottomBar = await page.$('#mobile-bottom-bar');
  assert.ok(bottomBar, 'Mobile bottom navigation bar must exist');
  const isBottomVisible = await bottomBar.isVisible();
  assert.strictEqual(isBottomVisible, true, 'Mobile bottom navigation bar must be visible on 390x844');

  // 2. Test switching domains via mobile bottom bar
  const forgeBottomBtn = await page.$('.mobile-bottom-item[data-domain="forge"]');
  assert.ok(forgeBottomBtn, 'Mobile bottom item for forge should exist');
  await forgeBottomBtn.click();
  await page.waitForSelector('#forge-overview-tab.active');

  const isForgeActive = await page.$eval('#forge-overview-tab', el => el.classList.contains('active'));
  assert.strictEqual(isForgeActive, true, 'Forge domain should be active after bottom nav tap');

  // 3. Test Mobile Drawer Toggle
  const mobileToggleBtn = await page.$('#btn-mobile-toggle');
  if (mobileToggleBtn && await mobileToggleBtn.isVisible()) {
    await mobileToggleBtn.click();
    const isSidebarOpen = await page.$eval('.sidebar', el => el.classList.contains('open'));
    assert.strictEqual(isSidebarOpen, true, 'Sidebar should open when hamburger button is clicked');

    // Click overlay to close
    const overlay = await page.$('#sidebar-overlay');
    if (overlay) {
      await overlay.click();
      const isSidebarClosed = await page.$eval('.sidebar', el => !el.classList.contains('open'));
      assert.strictEqual(isSidebarClosed, true, 'Sidebar should close when overlay is clicked');
    }
  }

  // 4. Test Pointer Events Drawing on Banishment Pentagram Canvas
  await page.evaluate(() => window.app.switchTab('banish'));
  await page.waitForSelector('#banish-tab.active');
  const banishCanvas = await page.$('#banish-canvas');
  assert.ok(banishCanvas, 'Banish canvas should exist');
  const banishBox = await banishCanvas.boundingBox();
  assert.ok(banishBox, 'Banish canvas must have bounding box');

  // Dispatch pointer events for drawing
  await banishCanvas.dispatchEvent('pointerdown', { clientX: banishBox.x + 40, clientY: banishBox.y + 120, pointerId: 1 });
  await banishCanvas.dispatchEvent('pointermove', { clientX: banishBox.x + 100, clientY: banishBox.y + 30, pointerId: 1 });
  await banishCanvas.dispatchEvent('pointerup', { clientX: banishBox.x + 160, clientY: banishBox.y + 120, pointerId: 1 });

  const banishPointsCount = await page.evaluate(() => window.app.banishPoints.length);
  assert.ok(banishPointsCount > 0, 'Pointer events must register points on banish canvas');

  // 5. Test Pointer Events Drawing on Blood Pact Canvas
  await page.evaluate(() => window.app.switchTab('pact'));
  await page.waitForSelector('#pact-tab.active');
  const pactCanvas = await page.$('#pact-canvas');
  assert.ok(pactCanvas, 'Pact canvas should exist');
  const pactBox = await pactCanvas.boundingBox();
  assert.ok(pactBox, 'Pact canvas must have bounding box');

  await pactCanvas.dispatchEvent('pointerdown', { clientX: pactBox.x + 50, clientY: pactBox.y + 50, pointerId: 1 });
  await pactCanvas.dispatchEvent('pointermove', { clientX: pactBox.x + 100, clientY: pactBox.y + 70, pointerId: 1 });
  await pactCanvas.dispatchEvent('pointerup', { clientX: pactBox.x + 100, clientY: pactBox.y + 70, pointerId: 1 });

  // Verify pact canvas has drawing content (non-blank)
  const isPactDrawn = await page.evaluate(() => {
    const canvas = document.getElementById('pact-canvas');
    const ctx = canvas.getContext('2d');
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    for (let i = 3; i < imgData.length; i += 4) {
      if (imgData[i] > 0) return true;
    }
    return false;
  });
  assert.strictEqual(isPactDrawn, true, 'Pointer events must draw marks on Blood Pact canvas');

  await browser.close();
});

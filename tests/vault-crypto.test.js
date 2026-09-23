const { test } = require('node:test');
const assert = require('node:assert');
const path = require('node:path');
const { chromium } = require('playwright');

test('Vault Cryptography: Web Crypto PBKDF2/AES-GCM Authenticated Encryption, Lock/Unlock, and Invariant Verification', async (t) => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const indexPath = 'file://' + path.resolve(__dirname, '../index.html');
  await page.goto(indexPath);

  const skipBtn = await page.$('#btn-portal-skip');
  if (skipBtn && await skipBtn.isVisible()) {
    await skipBtn.click();
  }

  // 1. Initialize Vault with Master Key
  const initSuccess = await page.evaluate(async () => {
    return await window.app.vault.initializeVault('SovereignPassphrase2026!');
  });
  assert.strictEqual(initSuccess, true, 'Vault initialization should succeed');

  const isUnlockedInitially = await page.evaluate(() => window.app.vault.isUnlocked);
  assert.strictEqual(isUnlockedInitially, true, 'Vault should be unlocked after initialization');

  // 2. Encrypt Sensitive Plaintext
  const secretText = 'Sacred oath of autonomy: My will is inviolable.';
  const envelope = await page.evaluate(async (secret) => {
    return await window.app.vault.encrypt(secret);
  }, secretText);

  assert.strictEqual(envelope.version, 1);
  assert.strictEqual(envelope.kdf, 'PBKDF2');
  assert.strictEqual(envelope.hash, 'SHA-256');
  assert.strictEqual(envelope.iterations, 100000);
  assert.strictEqual(envelope.tagLength, 128);
  assert.ok(envelope.salt, 'Envelope must contain base64 salt');
  assert.ok(envelope.iv, 'Envelope must contain base64 iv');
  assert.ok(envelope.ciphertext, 'Envelope must contain base64 ciphertext');

  // 3. Lock Vault
  await page.evaluate(() => {
    window.app.vault.lock();
  });
  const isLocked = await page.evaluate(() => window.app.vault.isUnlocked);
  assert.strictEqual(isLocked, false, 'Vault should be locked');

  // 4. Decrypt attempt while locked should fail
  const lockedDecryptThrows = await page.evaluate(async (env) => {
    try {
      await window.app.vault.decrypt(env);
      return false;
    } catch (e) {
      return true;
    }
  }, envelope);
  assert.strictEqual(lockedDecryptThrows, true, 'Decrypting while locked should reject');

  // 5. Wrong Passphrase should fail canary verification
  const wrongPassThrows = await page.evaluate(async () => {
    try {
      await window.app.vault.unlock('WrongPassword1234');
      return false;
    } catch (e) {
      return true;
    }
  });
  assert.strictEqual(wrongPassThrows, true, 'Wrong password unlock should reject with error');

  // 6. Correct Passphrase unlocks vault
  const correctUnlock = await page.evaluate(async () => {
    return await window.app.vault.unlock('SovereignPassphrase2026!');
  });
  assert.strictEqual(correctUnlock, true, 'Correct password unlock should succeed');

  // 7. Decrypt ciphertext recovers original secret
  const decrypted = await page.evaluate(async (env) => {
    return await window.app.vault.decrypt(env);
  }, envelope);
  assert.strictEqual(decrypted, secretText, 'Decrypted text must match original secret');

  // 8. Verify Legacy Cipher Tab is clearly marked as Obfuscation Only
  await page.evaluate(() => window.app.switchTab('cipher'));
  const cipherTabNotice = await page.$eval('#cipher-tab', el => el.innerText);
  assert.ok(
    cipherTabNotice.includes('Obfuscation') || cipherTabNotice.includes('Educational') || cipherTabNotice.includes('Legacy'),
    'Legacy cipher tab must display educational/obfuscation caveat'
  );

  await browser.close();
});

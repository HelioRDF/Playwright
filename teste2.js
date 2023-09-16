const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false,slowMo:2000
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://fdbidpl-tst1.outsystemsenterprise.com/');
  await page.locator('#Input_Username').click();
  await page.locator('#Input_Username').fill('756.279.760-98');
  await page.locator('#Input_PasswordVal').click();
  await page.locator('#Input_PasswordVal').fill('Teste@234');
  await page.getByRole('button', { name: 'Entrar' }).click();

  // ---------------------
 // await context.close();
  //await browser.close();
})();
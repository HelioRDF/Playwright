const { chromium } = require('playwright');
const expect = require('expect');

(async () => {
  
  const browser = await chromium.launch({ args: ['--start-maximized'], headless: false });
  const context = await browser.newContext()
  const page = await context.newPage()
  
  await page.goto('https://fdbidpl-tst1.outsystemsenterprise.com')
  
  await page.locator('#Input_Username').type('756.279.760-98');
  await page.locator('#Input_PasswordVal').fill('Teste@234');
  await page.getByRole('button', { name: 'Entrar' }).click();
  
  await page.waitForTimeout(5000)
  await page.waitForLoadState() 

  await context.storageState({ path: 'state.json' })
  
  await browser.close()
})()
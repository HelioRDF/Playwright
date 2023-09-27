
const {chromium} = require('playwright');

(async() => {
    const browser = await chromium.launch({headless:false})
    // const context = await browser.newContext()
    // const page = await context.newPage()
    const page = await browser.newPage()
    await page.goto('https://fdbidpl-tst1.outsystemsenterprise.com/');
   
    await page.waitForTimeout(3000)
    await page.locator('input[type="text"]').click()
    await page.locator('input[type="text"]').type('756.279.760-98');
    await page.locator('#Input_Password').fill('Teste@234');
    await page.waitForLoadState();
    await page.getByRole('button', { name: 'Entrar' }).click();
}) ()



const {chromium} = require('playwright');

(async() => {
    const browser = await chromium.launch({headless:false})
    const page = await browser.newPage()
    await page.goto('https://lusobr.x1.lusobrasileiro.travian.com/');
    await page.locator('input[name="name"]').click();
    await page.locator('input[name="name"]').fill('furioso');
    await page.locator('input[name="password"]').click();
    await page.locator('input[name="password"]').fill('Killer17');
    await page.getByRole('button', { name: 'Entrar' }).click();

}) ()

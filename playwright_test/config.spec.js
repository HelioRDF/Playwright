const { test, expect } = require('@playwright/test');

//test.beforeEach(async ({ page }) => {
    await page.goto('/#/login')
//})

// test.use({ viewport: { width: 600, height: 900 } }); // local configuration: only applicable to this file.

const login = async ({ page }) => {
    await expect(page).toHaveTitle('Conduit')
  //  await page.fill('input[type = "email"]', 'alanvoigt@yahoo.com.br')
    await page.fill('input[type = "email"]', nome)
    await page.press('input[type = "email"]', 'Tab')
   // await page.type('input[type = "password"]', 'test123')
    await page.type('input[type = "password"]', senha)
    await page.click('form >> "Sign in"')
    await page.waitForTimeout(3000);
    const locator = page.locator('.navbar-brand');
    await expect(locator).toContainText('conduit', { timeout: 30000 });
}

test('config basic test ', login () )


module.exports = login;
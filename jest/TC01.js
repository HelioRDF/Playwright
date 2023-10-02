data = require("./data/data.json");
describe('Suite 001', () => {

  test('Sign In', async () => {
    await page.goto(data.user01.url)

    await page.fill('input[type = "email"]', data.user01.email)
    await page.press('input[type = "email"]', 'Tab')
    await page.type('input[type = "password"]', data.user01.password)
    await page.waitForTimeout(1000);
    await page.click('form >> "Sign in"')
    //await page.waitForNavigation();
    const title = await page.title()
    await expect(title).toBe('Conduit')
    await browser.close()


  }, 99999)
})
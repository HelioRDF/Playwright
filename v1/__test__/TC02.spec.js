data = require('../data/data.json')


describe('GET', () => {
  test('Sign In TC02', async () => {
    await page.goto(data.url)
    const title = await page.title()
    expect(title).toBe('Conduit')

    await page.fill('input[type = "email"]', data.email)
    await page.press('input[type = "email"]', 'Tab')
    await page.type('input[type = "password"]', data.password)
    await Promise.all([
      page.waitForNavigation(),
      await page.click('form >> "Sign in"')
    ]);
  })
})
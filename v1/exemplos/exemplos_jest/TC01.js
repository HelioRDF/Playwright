describe('Post', () => {
	test('Sign In', async () => {
        await page.goto('https://react-redux.realworld.io/#/login')
        const title = await page.title()
        expect(title).toBe('Conduit')
      
        await page.fill('input[type = "email"]', 'alanvoigt@yahoo.com.br')
		    await page.press('input[type = "email"]', 'Tab')
		    await page.type('input[type = "password"]', 'test123')
        await Promise.all([
          page.waitForNavigation(), 
          await page.click('form >> "Sign in"') 
        ]);
    })
})
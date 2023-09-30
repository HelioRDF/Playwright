const { test, expect } = require('@playwright/test');
const  login  = require('./login.spec');

test.beforeEach(async ({page}) => {
    await page.goto('/#/login')
})

 test.use({ viewport: { width: 600, height: 900 } }); // local configuration: only applicable to this file.

test('config basic test ', login )


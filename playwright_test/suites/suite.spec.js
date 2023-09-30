const { test, expect } = require('@playwright/test');
const  login  = require('./login.spec');

test.beforeEach(async ({page}) => {
    await page.goto('/#/login')
})

 test.use({ viewport: { width: 600, height: 900 } }); // local configuration: only applicable to this file.

test('config basic test1 ', login )
test('config basic test2 ', login )
test('config basic test3 ', login )
test('config basic test4 ', login )
test('config basic test5 ', login )


const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({headless:false})

    const userContext = await browser.newContext()
      const page = await userContext.newPage()
    await page.goto('https://react-redux.realworld.io/#/login')

    const adminContext = await browser.newContext()
    const page2 = await adminContext.newPage()
    await page2.goto('https://google.com.br')

    const adminContext2 = await browser.newContext()
    const page3 = await adminContext2.newPage()
    await page3.goto('https://google.com.br')

    const userContext2 = await browser.newContext()
    const page4 = await userContext2.newPage()
  await page4.goto('https://react-redux.realworld.io/#/login')



    await page.waitForTimeout(8000)
    await browser.close()
})()
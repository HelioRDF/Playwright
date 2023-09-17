const { chromium } = require('playwright');
const expect = require('expect');

(async () => {
  const browser = await chromium.launch({ args: ['--start-maximized'], headless: false });
   const context = await browser.newContext({ storageState: 'state.json' })
  const page = await context.newPage()
  
  await page.goto('https://fdbidpl-tst1.outsystemsenterprise.com/HistoricodeVendas_New?CodAutorizacaoPreAut=&DataFimPreAut=1900-01-01&DataInicioPreAut=1900-01-01')


  //await browser.close()
})()
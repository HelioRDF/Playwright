const { default: expect } = require('expect');
const { chromium } = require('playwright');


(async () => {
  const dataAtual = new Date();

  const ano = dataAtual.getFullYear();
  const mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0'); // Adiciona 1 ao mês e garante 2 dígitos
  const dia = dataAtual.getDate().toString().padStart(2, '0'); // Garante 2 dígitos para o dia  
  const horas = dataAtual.getHours().toString().padStart(2, '0'); // Garante 2 dígitos para as horas
  const minutos = dataAtual.getMinutes().toString().padStart(2, '0'); // Garante 2 dígitos para os minutos

  const dataFormatada = `${dia}-${mes}-${ano}--${horas}h${minutos}min`;


  const browser = await chromium.launch({ args: ['--start-maximized'], headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1880, height: 920 });

  await page.goto('https://fdbidpl-tst1.outsystemsenterprise.com/');
  const title = await page.title()
  expect(title).toBe('')

  await page.locator('#Input_Username').type('756.279.760-98');
  await page.locator('#Input_PasswordVal').fill('Teste@234');
  await page.getByRole('button', { name: 'Entrar' }).click();

  await page.waitForTimeout(5000)
  await page.waitForLoadState()

  const url = await page.url()
  const vendasHoje = await page.$eval('div.ThemeGrid_Width5', valor => valor.innerText)
  const html = await page.innerHTML(".windows")

  expect(url).toContain('Home_New')
  expect(vendasHoje).toBeDefined();
  expect(vendasHoje).toBe("R$ 0,00");
  expect(html).toMatch("Antecipação");
  expect(html).toMatch("Vendas");

  //await page.waitForTimeout(5000)
  await page.waitForLoadState()
  await page.screenshot({ path: `./vendas/vendas_hoje--${dataFormatada}.png`, fullPage: true })
  await page.pdf({ path:'mypage.pdf' })
  // ---------------------

  await browser.close();
})();
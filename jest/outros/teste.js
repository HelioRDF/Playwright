const {chromium} = require('playwright');


describe('Suite de testes para a função de adição', () => {
  test('Deve somar corretamente dois números', async () => {
    const browser = await chromium.launch({headless:false})
    const page = await browser.newPage()
    await page.goto('https://fdbidpl-tst1.outsystemsenterprise.com/');
  
    const result = somar(3, 5); // Supondo que você tem uma função chamada "somar"
    expect(result).toBe(8);
    
  });

  test('Deve retornar 0 se um dos números for zero', () => {
    const result = somar(0, 10);
    expect(result).toBe(10);
  });

   // Se você precisar de configuração antes de cada teste
  beforeEach(() => {
    // Alguma configuração antes de cada teste
  });

  // Se você precisar de limpeza após cada teste
  afterEach(() => {
    // Alguma limpeza após cada teste
  });
});

// Função de exemplo para somar dois números
function somar(a, b) {
  return a + b;
}
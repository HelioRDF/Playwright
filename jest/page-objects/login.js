class login {
  async paginaLogin() {
    return await page.goto("https://react-redux.realworld.io/#/login");
  }

  async informarEmail(email) {
    return await page.fill('input[type = "email"]', email);
  }

  async informarSenha(senha) {
    return await page.type('input[type = "password"]', senha);
  }

  async confirmarLogin() {
    return await page.click('form >> "Sign in"');
  }

  async realizarLogin(email, senha) {
    await page.fill('input[type = "email"]', email);
    await page.type('input[type = "password"]', senha);
    await page.waitForTimeout(2000);
    await page.click('form >> "Sign in"');
  }

  async buscarTitulo() {
    return await page.title();
  }

  async fecharBrowser() {
    await page.waitForTimeout(4000);
    return await browser.close();
  }
}

module.exports = login;

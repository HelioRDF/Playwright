Login = require("./page-objects/login");
data = require("./data/data.json");

const login = new Login();

const test_login05 = async () => {
  await login.paginaLogin();
  await login.realizarLogin(data.user01.email, data.user01.password);
  const title = await login.buscarTitulo();
  await expect(title).toBe("Conduit");
  
};

module.exports = test_login05;

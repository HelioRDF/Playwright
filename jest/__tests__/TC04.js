Login = require("../page-objects/login");
Tools = require("../page-objects/tools");
data = require("../data/data.json");

describe("Post", () => {
  const login = new Login();
  const tools = new Tools();

  beforeAll(async () => {
    login.paginaLogin();
  });

  test("Sign In", async () => {
    await login.informarEmail(data.user01.email);
    await login.informarSenha(data.user01.password);
    await tools.aguardar(1000);
    await login.confirmarLogin();
    await tools.aguardar(1000);
    const title = await login.buscarTitulo();
    await expect(title).toBe("Conduit");
    await tools.aguardar(1000);
  }, 99999);

  test("Sign In 2", async () => {
    await login.realizarLogin(data.user01.email, data.user01.password);
    const title = await login.buscarTitulo();
    await expect(title).toBe("Conduit");
  }, 99999);

  afterAll(async () => {
    await login.fecharBrowser();
  });
});

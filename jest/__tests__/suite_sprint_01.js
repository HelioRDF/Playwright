test_login05 = require("../TC05_login");
test_login06 = require("../TC06_login");

describe("Suite 001", () => {
  const login = new Login();


  test("Sign In 1", test_login05, 99999);
  test("Sign In 2", test_login06, 99999);
  test("Sign In 3", test_login05, 99999);
  test("Sign In 4", test_login06, 99999);

  afterAll(async () => {
   await login.fecharBrowser();
  });
});

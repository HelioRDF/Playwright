const login = require("./config.spec"); // Importa a função do arquivo funcoes.js
const { test, expect } = require("@playwright/test");

test.describe("Suite 003", () => {
  test("nome suite", login);
});

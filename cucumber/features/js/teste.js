const { Given, When, Then } = require("cucumber");
const {expect} = require("expect");


Given("Que estou na página xpto", async () => {});

When("informar email", async () => {
  console.log("ok");
  expect("title").toContain("title");
  expect("title").toContain("title");
});

When("informar senha", async () => {
  console.log("ok");
  expect("title").toContain("title");
});

When("clicar em login", async () => {
  console.log("ok");
  expect("title").toContain("title");
});

Then("acesso a pagina home", async () => {
  console.log("ok");
  expect("title").toContain("title");
});

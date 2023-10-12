const { chromium } = require("playwright");
const {expect} = require("expect");
const { request } = require("@playwright/test");

(async () => {
  const context = await request.newContext({
    baseURL: "https://reqres.in",
  });
const response = await context.get('/api/users/3')
const responseBody = JSON.parse(await response.text())
//console.log(responseBody)
expect(response.status()).toBe(200)
expect(responseBody.data.id).toBe(3)

})();

const { test, expect } = require("@playwright/test");

//test.afterEach
//test.afterAll
//test.beforeAll
//test.beforeEach(async ({ page }) => {
//  await page.goto("https://react-redux.realworld.io/#/login");
//});

test.describe("Suite 001", () => {

  test("Suite basic test 1", async ({ page }) => {
    await expect(page).toHaveTitle("Conduit");

    expect(await page.screenshot()).toMatchSnapshot("SignIn.png", {
      threshold: 0.2,
    });

    await page.fill('input[type = "email"]', "alanvoigt@yahoo.com.br");
    await page.press('input[type = "email"]', "Tab");
    await page.type('input[type = "password"]', "test123");
    await page.click('form >> "Sign in"');
    const locator = page.locator(".navbar-brand");
    await expect(locator).toContainText("conduit", { timeout: 30000 });
  }),
    test("Suite basic test 2", async ({ page }) => {
      await expect(page).toHaveTitle("Conduit");

      expect(await page.screenshot()).toMatchSnapshot("SignIn.png", {
        threshold: 0.2,
      });

      await page.fill('input[type = "email"]', "alanvoigt@yahoo.com.br");
      await page.press('input[type = "email"]', "Tab");
      await page.type('input[type = "password"]', "test123");
      await page.click('form >> "Sign in"');
      const locator = page.locator(".navbar-brand");
      await expect(locator).toContainText("conduit", { timeout: 30000 });
    });
});

//test.only
//test.skip
test("basic test 2", async ({ page }) => {
  await expect(page).toHaveTitle("Conduit");

  expect(await page.screenshot()).toMatchSnapshot("SignIn.png", {
    threshold: 0.2,
  });

  await page.fill('input[type = "email"]', "alanvoigt@yahoo.com.br");
  await page.press('input[type = "email"]', "Tab");
  await page.type('input[type = "password"]', "test123");
  await page.click('form >> "Sign in"');
  const locator = page.locator(".navbar-brand");
  await expect(locator).toContainText("conduit", { timeout: 30000 });
});

test("login test", async ({ page }) => {
  await expect(page).toHaveTitle("Conduit");

  await page.fill('input[type = "email"]', "alanvoigt@yahoo.com.br");
  await page.press('input[type = "email"]', "Tab");
  await page.type('input[type = "password"]', "test123");
  await page.click('form >> "Sign in"');
  const locator = page.locator(".navbar-brand");
  await expect(locator).toContainText("conduit", { timeout: 30000 });
});



import test from "@playwright/test";


test.only('Localizando por data-test', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    /* Uso do locator via testIdAttribute, utilizando data-test*/
    await page.getByTestId('username').fill('gustavo');
})
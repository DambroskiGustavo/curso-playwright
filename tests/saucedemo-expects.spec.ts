import test, { expect } from "@playwright/test";

test('Localizando por data-teste-id', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByTestId('username').fill('Gustavo');
});

/* uso de Asserts, utilizando o "expect" */
/* expect.soft = comando do qual não para o teste, mesmo com erro, ele continuará */
test.only('Asserts básicos', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const loginbutton = await page.locator('input#login-button');
    await expect.soft(loginbutton).toHaveCSS('background-color', 'rgb(225, 35, 26)');
    await expect(loginbutton).not.toHaveCSS('background-color', 'rgb(0, 20, 0)');
    await expect(loginbutton).toHaveAttribute('value','Login');
    await expect.soft(loginbutton, 'Botão está visível').not.toBeHidden();
    await expect.soft(loginbutton).toHaveCSS('background-color', 'rgb(225, 35, 26)');
})

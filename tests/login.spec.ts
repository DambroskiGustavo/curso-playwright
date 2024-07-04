import { expect, test } from '@playwright/test'

test.describe('Logins de sucesso', async () => {
    test.beforeEach('', async ({page}) => {
        await page.goto('https://www.saucedemo.com');
    })

    test.beforeAll('', async () => {
        console.log("Começando testes de login de sucesso");
    })

    test('Usuário e senha corretos - usuário comum', async({ page }) => {
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('input#login-button').click();

        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        const productsLabel = page.locator('[data-test="title"]');
        await expect(productsLabel).toHaveText('Products');
    })
})
test.describe('Falhas no login', async () => {
    test.beforeEach('', async ({page}) => {
        await page.goto('https://www.saucedemo.com');
    })

    test.beforeAll('', async () => {
        console.log("Começando testes de falha de login");
    })

    test.afterEach('', async () => {
        console.log("Finalizando cada um dos testes de falha");
    })

    test.afterAll('', async () => {
        console.log("Finalização total dos testes de falha");
    })

    test('Login com usuario locked', async({ page }) => {
        const errorLabel = page.locator('[data-test="error"]');
        await expect(errorLabel).toBeHidden();
        await page.locator('[data-test="username"]').fill('locked_out_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('input#login-button').click();
        
        await expect(errorLabel).toHaveText('Epic sadface: Sorry, this user has been locked out.');
        await expect(errorLabel).toBeVisible();
    })

    test('Login com senha errada', async({ page }) => {
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('123456');
        await page.locator('input#login-button').click();
    
        const errorLabel = page.locator('[data-test="error"]');
        await expect(errorLabel).toHaveText('Epic sadface: Username and password do not match any user in this service');
        await expect(errorLabel).toBeVisible();
    })
})

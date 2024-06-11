import { test } from "@playwright/test";

// ***** Estrutura básica de teste no Playwright ***** //
test('Visitando página do Playwright', async ({ page }) => {
    await page.goto('https://playwright.dev');

    /* Forma de utilizar os locators via selectors convencionais */
    // await page.locator('.getStarted_Sjon').click();
    
    /* Formas mais simples de encontrar elementos */
    // await page.getByText('Get Started').click();
    const text = await page.getByText('enables reliable end-to-end testing for modern web apps.')
        .textContent();
        console.log(text);
})
import { test } from "@playwright/test";

// ***** Estrutura básica de teste no Playwright ***** //
test('Visitando página do Playwright', async ({ page }) => {
    await page.goto('https://playwright.dev');
    await page.locator('.getStarted_Sjon').click();
})
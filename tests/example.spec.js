const { test, expect } = require('@playwright/test')

test('SampleForm', async ({ page }) => {
    await page.goto('http://localhost:3000')
    await page.locator('#username').fill('trish')

    await page.locator('#password').fill('Trish123@')
    await page.locator('data-testid=submit').click()
    await page.waitForTimeout(4000)
})

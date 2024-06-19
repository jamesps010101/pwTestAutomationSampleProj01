import { expect } from '@playwright/test'
import { test } from '../test-fixtures.ts'


test.use({ storageState: { cookies: [], origins: [] } })

test('User logging in with invalid credentials', async({page, pageManager}) => {
    await pageManager.onHomePage().Login('baduser', 'badpassword')
    await expect(page.locator('.error-message-container')).toContainText('Username and password do not match')
})

test('User logging in with valid credentials', async({page, pageManager}) => {
    await pageManager.onHomePage().Login(process.env.TEST_USERNAME, process.env.TEST_PASSWORD)
    await expect(page.locator('.title')).toHaveText('Products')
})

test('User logging out', async({page, pageManager}) => {
    await pageManager.onHomePage().Login(process.env.TEST_USERNAME, process.env.TEST_PASSWORD)
    await expect(page.locator('.title')).toHaveText('Products')
    await pageManager.onMenuBarPage().Logout()
    await expect(page.locator('.login_container')).toBeVisible()
})
import { test as setup, expect } from '@playwright/test'

const authFile = '.auth/user.json'

setup('authenticate', async({page}) => {
    await page.goto('/')
    await page.getByRole('textbox', {name: 'Username'}).fill(process.env.TEST_USERNAME || '')
    await page.getByRole('textbox', {name: 'Password'}).fill(process.env.TEST_PASSWORD || '')
    await page.getByRole('button', {name: 'Login'}).click()
    await expect(page.locator('.title')).toHaveText('Products')
    await page.context().storageState({ path: authFile })
})
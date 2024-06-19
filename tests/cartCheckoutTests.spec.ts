import { expect } from '@playwright/test'
import { test } from '../test-fixtures.ts'

test.beforeEach(async({page}) => {
    await page.goto('/inventory.html')
})

test('Checkout process', async({page, pageManager}) => {
    const itemName = 'Sauce Labs Backpack'
    const inventoryPage = pageManager.onInventoryPage()
    const menuBarPage = pageManager.onMenuBarPage()
    const cartCheckoutPage = pageManager.onCartCheckoutPage()

    let item = inventoryPage.findItemOnPage(itemName)
    await inventoryPage.addToCart(item)
    await menuBarPage.goToCart()

    await cartCheckoutPage.clickCheckoutButton()
    await cartCheckoutPage.enterFirstName('John')
    await cartCheckoutPage.enterLastName('Wick')
    await cartCheckoutPage.enterZipCode('55555')
    await cartCheckoutPage.clickContinueButton()

    await expect(page.locator('.summary_total_label')).toContainText('32.39')

    await cartCheckoutPage.clickFinishButton()
    await expect(page.getByRole('heading', {name: 'Thank you for your order!'})).toBeVisible()
})
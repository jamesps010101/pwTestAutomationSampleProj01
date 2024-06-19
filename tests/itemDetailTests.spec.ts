import { expect } from '@playwright/test'
import { test } from '../test-fixtures.ts'


test.beforeEach(async({page}) => {
    await page.goto('/inventory.html')
})

test('Click on item to see detail page', async({page, pageManager}) => {
    const itemName = 'Sauce Labs Bike Light'
    const inventoryPage = pageManager.onInventoryPage()

    let item = inventoryPage.findItemOnPage(itemName)
    await inventoryPage.clickOnItem(item)
    await expect(page.locator('.inventory_details_name')).toHaveText(itemName)  
})

test('Add item to cart from detail page', async({page, pageManager}) => {
    const itemName = 'Sauce Labs Bike Light'
    const inventoryPage = pageManager.onInventoryPage()
    const itemDetailPage = pageManager.onItemDetailPage()

    let item = inventoryPage.findItemOnPage(itemName)
    await inventoryPage.clickOnItem(item)
    await expect(page.locator('.inventory_details_name')).toHaveText(itemName)

    await itemDetailPage.addToCart()
    await expect(page.getByRole('button', {name: itemDetailPage.getRemoveCartLabel()})).toBeVisible()
})

test('Remove item from cart from detail page', async({page, pageManager}) => {
    const itemName = 'Sauce Labs Bike Light'
    const inventoryPage = pageManager.onInventoryPage()
    const itemDetailPage = pageManager.onItemDetailPage()

    let item = inventoryPage.findItemOnPage(itemName)
    await inventoryPage.clickOnItem(item)
    await expect(page.locator('.inventory_details_name')).toHaveText(itemName)

    await itemDetailPage.addToCart()
    await expect(page.getByRole('button', {name: itemDetailPage.getRemoveCartLabel()})).toBeVisible()
    await itemDetailPage.removeFromCart()
    await expect(page.getByRole('button', {name: itemDetailPage.getAddCartLabel()})).toBeVisible()
})

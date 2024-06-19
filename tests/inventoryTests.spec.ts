import { expect } from '@playwright/test'
import { test } from '../test-fixtures.ts'


test.beforeEach(async({page}) => {
    await page.goto('/inventory.html')
})

test('Check if item is on page', async({page, pageManager}) => {
    const itemName ='Sauce Labs Fleece Jacket'
    const itemPrice = '$49.99'

    let item = pageManager.onInventoryPage().findItemOnPage(itemName)
    await expect(item.locator('.inventory_item_name')).toHaveText(itemName)
    await expect(item.locator('.inventory_item_price')).toHaveText(itemPrice)
})

test('Add item to cart', async({page, pageManager}) => {
    const itemName = 'Sauce Labs Bolt T-Shirt'
    const inventoryPage = pageManager.onInventoryPage()

    let item = inventoryPage.findItemOnPage(itemName)
    await expect(item.locator('.inventory_item_name')).toHaveText(itemName)
    await inventoryPage.addToCart(item)
    await expect(item.getByRole('button')).toHaveText(inventoryPage.getRemoveCartLabel())
})

test('Remove item from cart', async({page, pageManager}) => {
    const itemName = 'Sauce Labs Bolt T-Shirt'
    const inventoryPage = pageManager.onInventoryPage()

    let item = inventoryPage.findItemOnPage(itemName)
    await expect(item.locator('.inventory_item_name')).toHaveText(itemName)
    await inventoryPage.addToCart(item)
    await expect(item.getByRole('button')).toHaveText(inventoryPage.getRemoveCartLabel())
    await inventoryPage.removeFromCart(item)
    await expect(item.getByRole('button')).toHaveText(inventoryPage.getAddCartLabel())
})

test('Sort items by price low to high', async({page, pageManager}) => {
    const expectedFirstItemName = 'Sauce Labs Onesie'
    
    await pageManager.onInventoryPage().sortPriceLowToHigh()
    await expect(page.locator('.inventory_item_name').first()).toHaveText(expectedFirstItemName)
})
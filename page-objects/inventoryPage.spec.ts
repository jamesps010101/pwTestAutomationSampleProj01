import { Locator, Page } from '@playwright/test'

export class InventoryPage {
    private readonly page: Page
    private readonly addCartLabel = 'Add to cart'
    private readonly removeCartLabel = 'Remove'

    constructor(page: Page) {
        this.page = page
    }

    // getters
    getAddCartLabel() {
        return this.addCartLabel
    }

    getRemoveCartLabel() {
        return this.removeCartLabel
    }

    /**
     * finds an item on inventory page and returns locator
     * @param itemName 
     * @returns Locator
     */
    findItemOnPage(itemName: string) {
        return this.page.locator('.inventory_item', {hasText: itemName})
    }

    /**
     * Adds an item to the cart
     * @param item
     */
    async addToCart(item: Locator) {
        await item.getByRole('button', {name: this.addCartLabel}).click()
    }

    /**
     * Removes an item from the cart
     * @param item 
     */
    async removeFromCart(item: Locator) {
        await item.getByRole('button', {name: this.removeCartLabel}).click()
    }

    /**
     * Sorts inventory list by price low to high
     */
    async sortPriceLowToHigh() {
        await this.page.locator('.product_sort_container').selectOption('lohi')
    }

    /**
     * Clicks on item to open detail page
     * @param item 
     */
    async clickOnItem(item: Locator) {
        await item.getByRole('link').first().click()
    }
}
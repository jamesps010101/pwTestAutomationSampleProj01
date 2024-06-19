import { Locator, Page } from '@playwright/test'

export class ItemDetailPage {
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
     * Add item to cart
     */
    async addToCart(){
        await this.page.getByRole('button', {name: this.addCartLabel}).click()
    }

    /**
     * Remove item from cart
     */
    async removeFromCart(){
        await this.page.getByRole('button', {name: this.removeCartLabel}).click()
    }
}
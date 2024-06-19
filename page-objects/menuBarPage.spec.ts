import { Page } from '@playwright/test'

export class MenuBarPage {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    /**
     * This method performs a logout
     */
    async Logout() {
        await this.openMenu()
        await this.page.getByRole('link', {name:'Logout'}).click()
    }

    /**
     * Go to cart page
     */
    async goToCart() {
        await this.page.locator('.shopping_cart_link').click()
    }

    private async openMenu() {
        await this.page.locator('.bm-burger-button').click()
    }
}
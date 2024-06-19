import { Page } from '@playwright/test'

export class CartCheckoutPage {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    
    /**
     * Clicks the Checkout button
     */
    async clickCheckoutButton() {
        await this.page.getByRole('button', {name: 'Checkout'}).click()
    }

    /**
     * Fills in first name field
     * @param firstName 
     */
    async enterFirstName(firstName: string) {
        await this.page.getByRole('textbox', {name: 'First Name'}).fill(firstName)
    }

    /**
     * Fills in last name field
     * @param lastName 
     */
    async enterLastName(lastName: string) {
        await this.page.getByRole('textbox', {name: 'Last Name'}).fill(lastName)
    }

    /**
     * Fills in zip code field
     * @param zipCode
     */
    async enterZipCode(zipCode: string) {
        await this.page.getByRole('textbox', {name: 'Zip/Postal Code'}).fill(zipCode)
    }

    /**
     * Clicks the Continue button
     */
    async clickContinueButton() {
        await this.page.getByRole('button', {name: 'Continue'}).click()
    }

    /**
     * Clicks the Finish button
     */
    async clickFinishButton() {
        await this.page.getByRole('button', {name: 'Finish'}).click()
    }
}
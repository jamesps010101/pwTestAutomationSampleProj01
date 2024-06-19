import { Page } from '@playwright/test'

export class HomePage {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    /**
     * This method performs a login
     * @param userName 
     * @param passWord 
     */
    async Login(userName: any, passWord: any){
        await this.page.goto('/')
        await this.page.getByRole('textbox', {name: 'Username'}).fill(userName)
        await this.page.getByRole('textbox', {name: 'Password'}).fill(passWord)
        await this.page.getByRole('button', {name: 'Login'}).click()
    }
}
import { Page } from '@playwright/test'
import { HomePage } from '../page-objects/homePage.spec.ts'
import { MenuBarPage } from './menuBarPage.spec.ts'
import { InventoryPage } from './inventoryPage.spec.ts'
import { ItemDetailPage } from './itemDetailPage.spec.ts'
import { CartCheckoutPage } from './cartCheckoutPage.spec.ts'

export class PageManager {
    private readonly page: Page
    private readonly homePage: HomePage
    private readonly menuBarPage: MenuBarPage
    private readonly inventoryPage: InventoryPage
    private readonly itemDetailPage: ItemDetailPage
    private readonly cartCheckoutPage: CartCheckoutPage

    constructor(page: Page) {
        this.page = page
        this.homePage = new HomePage(this.page)
        this.menuBarPage = new MenuBarPage(this.page)
        this.inventoryPage = new InventoryPage(this.page)
        this.itemDetailPage = new ItemDetailPage(this.page)
        this.cartCheckoutPage = new CartCheckoutPage(this.page)
    }

    onHomePage(){ return this.homePage }
    onMenuBarPage(){ return this.menuBarPage }
    onInventoryPage() { return this.inventoryPage }
    onItemDetailPage() { return this.itemDetailPage }
    onCartCheckoutPage() { return this.cartCheckoutPage }
}
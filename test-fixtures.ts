import { test as base } from '@playwright/test'
import { PageManager } from './page-objects/pageManager.spec.ts'

export type TestFixtures = {
    pageManager: PageManager
}

export const test = base.extend<TestFixtures>({
    // page manager fixture
    pageManager: async({page}, use) => {
        const pm = new PageManager(page)
        await use(pm)
    }
})
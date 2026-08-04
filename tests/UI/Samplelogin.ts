import { Page, Locator } from '@playwright/test';

export class LoginPage {
    private readonly username: Locator;
    private readonly password: Locator;
    private readonly loginBtn: Locator;
    private readonly errorMsg: Locator;

    constructor(private readonly page: Page) {
        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginBtn = page.locator('#login-button');
        this.errorMsg = page.locator('[data-test="error"]');
    }

    async navigate() {
        await this.page.goto('/');           // baseURL from playwright.config.ts
    }

    async login(user: string, pass: string) {
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginBtn.click();
    }

    async getErrorMessage(): Promise<string> {
        return await this.errorMsg.innerText();
    }
}
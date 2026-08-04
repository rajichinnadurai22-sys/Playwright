import{Page, Locator} from '@playwright/test'
import { testdata } from './testdata';


export class LoginPage{
    
    usernameInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;
    page: Page;
    errorMsg: Locator

    constructor(page: Page){
        this.page = page;
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMsg = page.locator('[data-test="error"]');        
    }

    async navigate(){

        await this.page.goto(testdata.baseUrl)
    }
    

    async login(username: string, password: string){

        await this.usernameInput.fill(testdata.username)
        await this.passwordInput.fill(testdata.password)
        await this.loginButton.click()
        

    }
     async loginWithValidUser() {
        await this.login(testdata.username, testdata.password);
    }

    async getErrorMessage(): Promise<string> {
        return await this.errorMsg.innerText();
    }

}

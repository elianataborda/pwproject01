const { expect } = require('@playwright/test');

exports.SauceLabClass = class SauceLabs {

    constructor(page){
        this.userName = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        this.loginButton = page.locator('#login-button');
    }

   
    async userNameBox(userName){
        await this.userName.fill(userName);
    }

    async passwordBox(password){
        await this.password.fill(password);
    }

    async loginButtonAction(){
        await this.loginButton.click();
    }
}
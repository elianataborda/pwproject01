import { test, expect } from '@playwright/test';
const{ chromium } = require('@playwright/test');

const { SauceLabClass } = require('./SauceLabClass');


test('Login Success', async ({ page }) => {
    const saucelab = new SauceLabClass(page);
    await page.goto('https://www.saucedemo.com/');
    await saucelab.userNameBox('standard_user');
    await saucelab.passwordBox('secret_sauce');
    await saucelab.loginButtonAction();

    //verify new page
    await page.locator('#menu_button_container').isVisible();
    await page.locator('#shopping_cart_container').isVisible();
    await page.locator('#inventory_container').first().isVisible();

    //sort the results
    await page.locator('[data-test="product_sort_container"]').click();
    await page.locator('[data-test="product_sort_container"]:nth-child(2)').click( {force : true});
});
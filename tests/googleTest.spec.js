import { test, expect } from '@playwright/test';
const{ chromium } = require('@playwright/test');

const{ GooglePageClass } = require('./googlePageClass');

test('Google Search', async({page}) => {
    const  google = new GooglePageClass(page);
     await page.goto('https://www.google.com');
     await google.searchBox('Barcelona');
     await google.searchButtonAction();

});

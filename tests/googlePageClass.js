const { expect } = require('@playwright/test');

exports.GooglePageClass = class GooglePageClass{
    constructor(page){
        this.page = page;
        this.search = page.locator('#APjFqb');
        this.searchButton = page.getByRole('button', { name: 'Buscar con Google'});
    }
    
    async searchBox(searchWord){
        await this.search.fill(searchWord);
    }

    async searchButtonAction(){
        await this.searchButton.click({force: true});
    }

}
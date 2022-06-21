export class Actions {

    static typeText(selector: string, text: string) {
        cy.xpath(selector).type(text);
    }

    static click(selector: string) {
        cy.xpath(selector).click();
    }

    static selectOption(selector: string, option) {
        cy.get(selector).select(option);
    }

    static check(selector: string) {
        cy.get(selector).check();
    }

    static uncheck(selector: string) {
        cy.get(selector).uncheck();
    }

    static clear(selector: string) {
        cy.get(selector).clear();
    }

    static readFile = (path) => {
        return cy.readFile(path);
    }

    static getLoginData = () => {
        return cy.readFile(Cypress.env('login_data_path'));
    }

    static isDisplayed(selector: string) {
        cy.xpath(selector).should('be.visible');
    }


}

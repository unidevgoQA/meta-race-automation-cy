import "cypress-iframe";
import "cypress-xpath";
import "cypress-localstorage-commands";
import {TestData} from "../fixtures/testData";
import * as Process from "process";

class SignUpPage {

    signUpInButton = "//button[contains(text(),'SIGN IN • UP')]";

    getHomePage = () => {
        cy.visit(Cypress.env('base_url'));
        cy.clearLocalStorage();
        cy.clearLocalStorageSnapshot();
        cy.reload();
        return this;
    }

    clickSignUpInButton = () => {
        cy.xpath(this.signUpInButton).click();
        return this;
    }

}

export default SignUpPage;

import "cypress-iframe";
import "cypress-xpath";
import "cypress-localstorage-commands";
import {TestData} from "../fixtures/testData";
import SignUpPage from "./SignUp.page";

class HomePage {
    static emailField = '#email';
    static passwordField = '#password';
    static loginBtn = '.css-prfyaa';

    static getHomePage = () => {
        cy.visit(Cypress.env.base_url);
        return this;
    }


}

export default HomePage;

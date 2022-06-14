import "cypress-iframe";
import "cypress-xpath";
import "cypress-localstorage-commands";

class ForgetPasswordPage {
    static emailField = '#email';
    static passwordField = '#password';
    static loginBtn = '.css-prfyaa';

    static getHomePage = () => {
        cy.visit("https://qa.futurebrightenergy.com/");
        return this;
    }

    static clickForgetPassword = () => {
        cy.get('.css-1seffgf > .chakra-link').click();
        return this;
    }


}

export default ForgetPasswordPage;

import "cypress-iframe";
import "cypress-xpath";
import "cypress-localstorage-commands";

class SignUpPage {

    static getHomePage = () => {
        cy.visit("https://qa.futurebrightenergy.com/");
        return this;
    }

    static clickSignUp = () => {
        cy.contains("Sign up").click();
        return this;
    }
}

export default SignUpPage;

import "cypress-iframe";
import "cypress-xpath";
import "cypress-localstorage-commands";
import {TestData} from "../fixtures/testData";
import * as Process from "process";
import {Actions} from "../support/actions";

class SignUpPage {

    static signUpInButton = "//button[contains(text(),'SIGN IN • UP')]";
    static signUpForFreeLink = "//button[normalize-space()='SIGN UP FOR FREE']"
    static usernameField = "//input[@id='username']";
    static emailField = "//input[@id='email']";
    static nextStepBtn = "//button[normalize-space()='NEXT STEP']"
    static passwordField = "//input[@id='password']";
    static confirmPasswordField = "//input[@id='password-confirm']";
    static otpSendMsg = "//*[contains(text(), \"A code was send to\")]"

    static getHomePage = () => {
        cy.visit(Cypress.env('base_url'));
        cy.window().then((win) => {
            win.sessionStorage.clear()
            win.localStorage.clear()
        });
        cy.reload();
        return this;
    }

    static clickSignUpInButton = () => {
        cy.xpath(this.signUpInButton).click();
        return this;
    }

    static clickNextStepBtn = () => {
        cy.xpath(this.nextStepBtn).click();
        return this;
    }


    static signUp = () => {
        this.getHomePage();

        this.clickSignUpInButton()
        cy.xpath(this.signUpForFreeLink).click();


        Actions.readFile(Cypress.env('login_data_path')).then(data => {
            TestData.writeCounterFile();
            let userName = TestData.generateUserName(data.emailPrefix, data.counter);
            cy.xpath(this.usernameField).type(userName);
            cy.xpath(this.emailField).type(TestData.generateEmailAlias(data.emailPrefix, data.counter, data.emailSuffix));
        });

        this.clickNextStepBtn();
        Actions.typeText(this.passwordField, "5946644Ss@");
        Actions.typeText(this.confirmPasswordField, "5946644Ss@");
        this.clickNextStepBtn();

        cy.xpath(this.otpSendMsg).should('be.visible');


    }

}

export default SignUpPage;

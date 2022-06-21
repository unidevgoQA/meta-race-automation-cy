import "cypress-iframe";
import "cypress-xpath";
import "cypress-localstorage-commands";
import {TestData} from "../fixtures/testData";
import * as Process from "process";
import {Actions} from "../support/actions";

class SignUpPage {

    signUpInButton = "//button[contains(text(),'SIGN IN • UP')]";
    signUpForFreeLink = "//button[normalize-space()='SIGN UP FOR FREE']"
    usernameField = "//input[@id='username']";
    emailField = "//input[@id='email']";
    nextStepBtn = "//button[normalize-space()='NEXT STEP']"
    passwordField = "//input[@id='password']";
    confirmPasswordField = "//input[@id='password-confirm']";
    otpSendMsg = "//*[contains(text(), \"A code was send to\")]"

    getHomePage = () => {
        cy.visit(Cypress.env('base_url'));
        cy.window().then((win) => {
            win.sessionStorage.clear()
            win.localStorage.clear()
        });
        cy.reload();
        return this;
    }

    clickSignUpInButton = () => {
        cy.xpath(this.signUpInButton).click();
        return this;
    }

    clickNextStepBtn = () => {
        cy.xpath(this.nextStepBtn).click();
        return this;
    }


    signUp = () => {
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

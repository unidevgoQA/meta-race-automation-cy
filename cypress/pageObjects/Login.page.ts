import "cypress-iframe";
import "cypress-xpath";
import "cypress-localstorage-commands";
import {TestData} from "../fixtures/testData";
import SignUpPage from "./SignUp.page";
import {Actions} from "../support/actions";

class LoginPage {
    static signInBtn = '//button[contains(text(),\'SIGN IN • UP\')]';
    static emailField = '//input[@id=\'email\']';
    static passwordField = '//input[@id=\'password\']';
    static getStartedBtn = "//button[@type='submit']"

    static forgetPasswordLink = "//button[normalize-space()='FORGOT PASSWORD?']";
    static forgetPasswordHeader = "//h2[normalize-space()='Forgot Password?']";
    static sendResetInstructionsBtn = "//button[normalize-space()='SEND RESET INSTRUCTIONS']";
    static sentMessage = "//h2[normalize-space()='Email instructions sent']";

    static login(email: string, password: string) {
        cy.xpath(this.signInBtn).click();
        Actions.typeText(this.emailField, email);
        Actions.typeText(this.passwordField, password);
        Actions.click(this.getStartedBtn);
        cy.contains('CONNECT WALLET');
        return this;
    }

    static forgetPassword(email: string) {
        Actions.click(this.signInBtn);
        Actions.click(this.forgetPasswordLink);
        Actions.isDisplayed(this.forgetPasswordHeader);
        Actions.typeText(this.emailField, email);
        Actions.click(this.sendResetInstructionsBtn);
        Actions.isDisplayed(this.sentMessage);
        return this;
    }
}

export default LoginPage;

import "cypress-iframe";
import "cypress-xpath";
import "cypress-localstorage-commands";
import {TestData} from "../fixtures/testData";
import SignUpPage from "./SignUp.page";
import {Actions} from "../support/actions";

class LoginPage {
    signInBtn = '//button[contains(text(),\'SIGN IN • UP\')]';
    emailField = '//input[@id=\'email\']';
    passwordField = '//input[@id=\'password\']';
    getStartedBtn = "//button[@type='submit']"

    forgetPasswordLink = "//button[normalize-space()='FORGOT PASSWORD?']";
    forgetPasswordHeader = "//h2[normalize-space()='Forgot Password?']";
    sendResetInstructionsBtn = "//button[normalize-space()='SEND RESET INSTRUCTIONS']";
    sentMessage = "//h2[normalize-space()='Email instructions sent']";

    login(email, password) {
        cy.xpath(this.signInBtn).click();
        Actions.typeText(this.emailField, email);
        Actions.typeText(this.passwordField, password);
        Actions.click(this.getStartedBtn);
        cy.contains('CONNECT WALLET');
    }

    forgetPassword(email) {
        Actions.click(this.signInBtn);
        Actions.click(this.forgetPasswordLink);
        Actions.isVisible(this.forgetPasswordHeader);
        Actions.typeText(this.emailField, email);
        Actions.click(this.sendResetInstructionsBtn);
        Actions.isVisible(this.sentMessage);
    }
}

export default LoginPage;

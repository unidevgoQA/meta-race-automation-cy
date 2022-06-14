import HomePage from "../pageObjects/SignUp.page";
import "cypress-localstorage-commands";
import {TestData} from "../fixtures/testData";
import SignUpPage from "../pageObjects/SignUp.page";
import LoginPage from "../pageObjects/Login.page";
import ForgetPasswordPage from "../pageObjects/ForgetPasswordPage";


describe('Login Test', () => {


    let testData;

    beforeEach(() => {
        cy.fixture('login').then(dataJson => {
            testData = dataJson;
        });
    });


    it('UI Test 1.1 - Validate forget password page loads', () => {
        HomePage.getHomePage();
        LoginPage.clickSignIn();
        ForgetPasswordPage.clickForgetPassword();
        cy.url().should('include', 'forgot-password');
    });

    it('UI Test 1.2 - Validate user can reset password', () => {
        cy.get('#email').type(testData.email);
        cy.contains('Recover password').click();
        cy.contains('A recovery code has been sent to your e-mail').should('be.visible');
    });




})

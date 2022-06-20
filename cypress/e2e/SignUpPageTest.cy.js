import "cypress-localstorage-commands";
import {TestData} from "../fixtures/testData";
import SignUpPage from "../pageObjects/SignUp.page";


describe('Sign Up Page Test', () => {

    let signUpPage = new SignUpPage();

    it('Should be able to see Sign UP button', function () {
        signUpPage.getHomePage();
        cy.xpath(signUpPage.signUpInButton).should('be.visible');
    });

    it('Should be able to click Sign UP button', function () {
        signUpPage.clickSignUpInButton();
        cy.contains('Welcome back!').should('be.visible');
    });


})

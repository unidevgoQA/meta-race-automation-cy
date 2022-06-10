import HomePage from "../pageObjects/SignUp.page";
import "cypress-localstorage-commands";
import {TestData} from "../fixtures/testData";
import SignUpPage from "../pageObjects/SignUp.page";
import LoginPage from "../pageObjects/Login.page";


describe('Login Test', () => {


    let testData;

    beforeEach(() => {
        cy.fixture('login').then(dataJson => {
            testData = dataJson;
        });
    });


    it('UI Test 1.1 - Validate user login functionality', () => {
        SignUpPage.getHomePage();
        LoginPage.clickSignIn();
        LoginPage.enterEmail(testData.email);
        LoginPage.enterPassword(testData.password);
        LoginPage.clickLogin();
        cy.contains("Good morning").should('be.visible');

    })




})

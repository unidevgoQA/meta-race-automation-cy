import HomePage from "../pageObjects/SignUp.page";
import "cypress-localstorage-commands";
import {TestData} from "../fixtures/testData";


describe('Sign Up Page Test', () => {


    let testData;

    beforeEach(() => {
        cy.fixture('login').then(dataJson => {
            testData = dataJson;
        });
    });


    it('UI Test 1.1 - Validate User sign up functionality', () => {
        TestData.writeCounterFile();
        HomePage.getHomePage();
        HomePage.clickSignUp();
        HomePage.clickPeer();
        HomePage.enterName();
        HomePage.enterEmails(testData.emailPrefix, testData.emailSuffix);        HomePage.enterPasswords();
        HomePage.enterDateOfBirth();
        HomePage.enterNationality();
        HomePage.selectCountry();
        HomePage.checkAgreementBox();
        HomePage.clickSubmit();
        cy.contains("A code was sent to")
    })


    it('UI Test 1.2 - SignUP as Visionary functionality', () => {
        HomePage.getHomePage();
        HomePage.clickSignUp();
        HomePage.clickVisionary();
        HomePage.enterNameOfOrganization();
        HomePage.enterEmails(testData.emailPrefix, testData.emailSuffix);
        HomePage.enterPasswords();
        HomePage.enterName();
        HomePage.enterPhoneNumber();
        HomePage.enterPosition();
        HomePage.checkAgreementBox();
        HomePage.clickSubmit();
        cy.contains("A code was sent to")
    })



})

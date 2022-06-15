import SurveyPage from "../pageObjects/SurveyPage";
import "cypress-localstorage-commands";
import {TestData} from "../fixtures/testData";


describe('Survey Page Test', () => {


    let testData;

    beforeEach(() => {
        cy.fixture('login').then(dataJson => {
            testData = dataJson;
        });
    });


    it('UI Test 1.1 - Validate Peer Survey', () => {
        SurveyPage.getHomePage();
        SurveyPage.clickSignUp();
        SurveyPage.clickYesPlease();
        SurveyPage.selectPeerOption();
        SurveyPage.fillUpPeerSurveyForm();
        // SurveyPage.enterName();
        // SurveyPage.enterEmails(testData.emailPrefix, testData.emailSuffix);        HomePage.enterPasswords();
        // SurveyPage.enterDateOfBirth();
        // SurveyPage.enterNationality();
        // SurveyPage.selectCountry();
    })

    //
    // it('UI Test 1.2 - SignUP as Visionary functionality', () => {
    //     HomePage.getHomePage();
    //     HomePage.clickSignUp();
    //     HomePage.clickNoSignUp();
    //     HomePage.clickVisionary();
    //     HomePage.enterNameOfOrganization();
    //     HomePage.enterEmails(testData.emailPrefix, testData.emailSuffix);
    //     HomePage.enterPasswords();
    //     HomePage.enterName();
    //     HomePage.enterPhoneNumber();
    //     HomePage.enterPosition();
    //     HomePage.checkAgreementBox();
    //     HomePage.clickSubmit();
    //     cy.contains("A code was sent to")
    // })



})

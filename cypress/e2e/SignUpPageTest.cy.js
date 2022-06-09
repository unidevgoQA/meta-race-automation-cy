import HomePage from "../pageObjects/SignUp.page";
import "cypress-localstorage-commands";


describe('Sign Up Page Test', () => {


    let testData;

    beforeEach(() => {
      cy.fixture('login').then(dataJson => {
        testData = dataJson;
      });
    });


    it('UI Test 1.1 - Validate User sign up functionality', () => {
        HomePage.getHomePage();
        HomePage.clickSignUp();
    })


})

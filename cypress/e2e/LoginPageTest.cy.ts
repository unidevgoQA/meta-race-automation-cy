import HomePage from "../pageObjects/SignUp.page";
import "cypress-localstorage-commands";
import {TestData} from "../fixtures/testData";
import SignUpPage from "../pageObjects/SignUp.page";
import LoginPage from "../pageObjects/Login.page";
import signUpPage from "../pageObjects/SignUp.page";


describe('Login Test', () => {


    let testData;

    beforeEach(() => {
        cy.fixture('login').then(dataJson => {
            testData = dataJson;
        });
    });


    it('UI Test 1.1 - Validate user login functionality', () => {
        let loginPage = new LoginPage();
        let signUpPage = new SignUpPage();
        signUpPage.getHomePage();
        loginPage.login(testData.email, testData.password);

    })

    it('UI Test 1.2 - Validate forget password functionality', () => {
        let loginPage = new LoginPage();
        let signUpPage = new SignUpPage();
        signUpPage.getHomePage();
        loginPage.forgetPassword(testData.email);
    });

})

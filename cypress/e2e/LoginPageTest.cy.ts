import "cypress-localstorage-commands";
import LoginPage from "../pageObjects/Login.page";
import SignUpPage from "../pageObjects/SignUp.page";

describe("Login Test", () => {
  let testData;

  beforeEach(() => {
    cy.fixture("login").then((dataJson) => {
      testData = dataJson;
    });
  });

  it("UI Test 1.1 - Validate user login functionality", () => {
    SignUpPage.getHomePage();
    LoginPage.login(testData.email, testData.password);
  });

  it("UI Test 1.2 - Validate forget password functionality", () => {
    SignUpPage.getHomePage();
    LoginPage.forgetPassword(testData.email);
  });
});

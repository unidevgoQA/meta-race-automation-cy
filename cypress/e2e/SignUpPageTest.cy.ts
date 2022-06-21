import "cypress-localstorage-commands";
import SignUpPage from "../pageObjects/SignUp.page";

describe("Sign Up Page Test", () => {
  it("Should be able to see Sign UP button", function () {
    SignUpPage.getHomePage();
    cy.xpath(SignUpPage.signUpInButton).should("be.visible");
  });

  it("Should be able to click Sign UP button", function () {
    SignUpPage.clickSignUpInButton();
    cy.contains("Welcome back!").should("be.visible");
  });

  it("Should be able to sign up", function () {
    SignUpPage.signUp();
  });
});

import "cypress-iframe";
import "cypress-xpath";
import "cypress-localstorage-commands";
import {TestData} from "../fixtures/testData";
import * as Process from "process";

class SurveyPage {

    static getHomePage = () => {
        cy.visit("https://qa.futurebrightenergy.com/");
        return this;
    }

    static clickSignUp = () => {
        cy.contains("Sign up").click();
        return this;
    }

    static enterEmail = (pre, suf) => {
        TestData.writeCounterFile();
        cy.readFile(Cypress.env('login_data_path')).then(data => {
            let email = TestData.generateEmailAlias(pre, data.counter, suf);
            cy.get('#email').clear().type(email);
        });
        return this;
    }

    static clickYesPlease = () => {
        cy.get('.css-1b9r2zo').click();
        return this;
    }

    static selectPeerOption = () => {
        cy.get(':nth-child(1) > .css-0 > .css-13mq7io').click();
        return this;
    }

    static fillUpPeerSurveyForm = () => {
        cy.wait(3000)
        cy.get('[id="hs-form-iframe-1"]').then((iframe) => {
            cy.wrap(iframe)
                .xpath('//input').should('be.visible');
        });
    }


}

export default SurveyPage;

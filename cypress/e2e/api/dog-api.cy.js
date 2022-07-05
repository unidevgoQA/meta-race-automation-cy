import { TestData } from "../../fixtures/testData";
import { Api } from "./base-api";
import { getHeaderWithToken } from "./utils";

describe("Dog Api tests", () => {

        let data;

        before(() => {
            cy.fixture('api-data').then(dataJson => {
                data = dataJson;
            });
        });


        it("UI Test 1.1 - '/game/api/race/' api test", () => {


                let api = new Api('/game/api/race', {}, {});
                api.get().then(res => {
                    expect(res.status).to.equal(200);
                })
            });




});



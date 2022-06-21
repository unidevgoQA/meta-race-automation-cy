import { TestData } from "../../fixtures/testData";
import { Actions } from "../../support/actions";
import { Api } from "./base-api";

describe("User login tests", () => {
  let data;

  before(() => {
    cy.fixture("api-data").then((dataJson) => {
      data = dataJson;
    });
  });

  it("UI Test - 1.1 - Signup", () => {
    let signUPApi = new Api("/api/auth/signup");
    Actions.readFile(Cypress.env("login_data_path")).then((loginData) => {
      let data = loginData;
      TestData.writeCounterFile();
      let counter = loginData.counter;
      let body = {
        username: TestData.generateUserName(data.emailPrefix, counter),
        email: TestData.generateEmailAlias(
          data.emailPrefix,
          counter,
          data.emailSuffix
        ),
        password: "5946644Ss@",
      };
      signUPApi.post(body).then((r) => {
        expect(r.status).to.equal(201);
        expect(r.headers["content-type"]).to.equal(
          "application/json; charset=utf-8"
        );
        expect(r.body.data.username).contain("ss.unidev");
        expect(r.body.data.email).contain("ss.unidev");
        expect(r.headers["access-control-allow-origin"]).to.equal("*");
        expect(r.headers["date"]).to.be.a("string");
        expect(r.headers["x-powered-by"]).to.equal("Express");
        expect(r.headers["connection"]).to.equal("keep-alive");
        expect(r.headers["content-length"]).to.equal("120");
      });
    });
  });
});

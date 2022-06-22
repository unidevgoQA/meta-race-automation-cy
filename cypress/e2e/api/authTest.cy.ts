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

  it("UI Test - 1.1 - /api/auth/signup endpoint test", () => {
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
      });
    });
  });

  it("UI Test - 1.2 - api/auth/gambler/signup endpoint test", () => {
    let signUPApi = new Api("/api/auth/gambler/signup");
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
      });
    });
  });

  it("UI Test - 1.3 - /api/auth/admin/signup endpoint test", () => {
    let signUPApi = new Api("/api/auth/admin/signup");
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

        expect(r.headers["access-control-allow-origin"]).to.equal("*");
        expect(r.headers["date"]).to.be.a("string");
        expect(r.headers["x-powered-by"]).to.equal("Express");
        expect(r.headers["connection"]).to.equal("keep-alive");
      });
    });
  });

  it("UI Test - 1.4 - /api/auth/send/otp endpoint test", () => {
    let api = new Api("/api/auth/send/otp");
    Actions.readFile(Cypress.env("login_data_path")).then((loginData) => {
      let data = loginData;
      TestData.writeCounterFile();
      let counter = loginData.counter;
      console.log(data.email);
      let body = {
        email: data.email,
      };
      api.post(body).then((r) => {
        expect(r.status).to.equal(201);
        expect(r.headers["content-type"]).to.equal(
          "application/json; charset=utf-8"
        );

        expect(r.headers["access-control-allow-origin"]).to.equal("*");
        expect(r.headers["date"]).to.be.a("string");
        expect(r.headers["x-powered-by"]).to.equal("Express");
        expect(r.headers["connection"]).to.equal("keep-alive");
      });
    });
  });

  it("UI Test - 1.5 - /api/auth/verify/email endpoint test", () => {
    let api = new Api("/api/auth/verify/email");
    Actions.readFile(Cypress.env("login_data_path")).then((loginData) => {
      let data = loginData;
      let body = {
        email: data.email,
      };
      api.post(body).then((r) => {
        expect(r.status).to.equal(409);
        expect(r.headers["content-type"]).to.equal(
          "application/json; charset=utf-8"
        );

        expect(r.headers["access-control-allow-origin"]).to.equal("*");
        expect(r.headers["date"]).to.be.a("string");
        expect(r.headers["x-powered-by"]).to.equal("Express");
        expect(r.headers["connection"]).to.equal("keep-alive");
      });
    });
  });

  it("UI Test - 1.6 - /api/auth/login endpoint test", () => {
    let api = new Api("/api/auth/login");
    Actions.readFile(Cypress.env("login_data_path")).then((loginData) => {
      let data = loginData;
      TestData.writeCounterFile();
      let counter = loginData.counter;
      console.log(data.email);
      let body = {
        email: data.email,
        password: data.password,
      };
      api.post(body).then((r) => {
        expect(r.status).to.equal(201);
        expect(r.headers["content-type"]).to.equal(
          "application/json; charset=utf-8"
        );

        expect(r.headers["access-control-allow-origin"]).to.equal("*");
        expect(r.headers["date"]).to.be.a("string");
        expect(r.headers["x-powered-by"]).to.equal("Express");
        expect(r.headers["connection"]).to.equal("keep-alive");
      });
    });
  });
});

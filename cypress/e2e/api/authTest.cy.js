import { TestData } from "../../fixtures/testData";
import { Api } from "./base-api";

describe("User login tests", () => {

        let data;

        before(() => {
            cy.fixture('api-data').then(dataJson => {
                data = dataJson;
            });
        });


        it("UI Test 1.1 - '/api/auth/signup/' api test", () => {
            
            TestData.writeCounterFile();

            cy.readFile(Cypress.env('login_data_path')).then(data => {
                let email = data.emailPrefix + "+" + data.counter + data.emailSuffix;
                let password = data.password;
                let username = data.emailPrefix + data.counter;

                let body = {
                    "email": email,
                    "password": password,
                    "username": username
                };

                let api = new Api('/api/auth/signup/', body, {});
                api.post().then(res => {
                    expect(res.status).to.equal(201);
                    expect(res.body.data.username).to.equal(username);
                    expect(res.body.data.email).to.equal(email);
                })
            });
            });



        it("UI Test 1.2 - '/api/auth/gambler/signup/' api test", () => {
        
            TestData.writeCounterFile();

            cy.readFile(Cypress.env('login_data_path')).then(data => {
                let email = data.emailPrefix + "+" + data.counter + data.emailSuffix;
                let password = data.password;
                let username = data.emailPrefix + data.counter;

                let body = {
                    "email": email,
                    "password": password,
                    "username": username
                };

                let api = new Api('/api/auth/gambler/signup/', body, {});
                api.post().then(res => {
                    expect(res.status).to.equal(201);
                    expect(res.body.data.username).to.equal(username);
                    expect(res.body.data.email).to.equal(email);
                })
            });
            });
    
    


        it("UI Test 1.3 - '/api/auth/admin/signup/' api test", () => {
    
            TestData.writeCounterFile();

            cy.readFile(Cypress.env('login_data_path')).then(data => {
                let email = data.emailPrefix + "+" + data.counter + data.emailSuffix;
                let password = data.password;
                let username = data.emailPrefix + data.counter;

                let body = {
                    "email": email,
                    "password": password,
                    "username": username
                };

                let api = new Api('/api/auth/admin/signup/', body, {});
                api.post().then(res => {
                    expect(res.status).to.equal(201);
                })
            });
            });
    

    it("UI Test 1.4 - '/api/auth/send/otp/' api test", () => {

        TestData.writeCounterFile();

        cy.readFile(Cypress.env('login_data_path')).then(data => {

            let body = {
                "email": data.email,

            };

            let api = new Api('/api/auth/send/otp', body, {});
            api.post().then(res => {
                expect(res.status).to.equal(201);
            })
        });
        });

    it("UI Test 1.5 - '/api/auth/verify/email/' api test", () => {

        TestData.writeCounterFile();

        cy.readFile(Cypress.env('login_data_path')).then(data => {

            let body = {
                "email": data.email,

            };

            let api = new Api('/api/auth/verify/email', body, {});
            api.post().then(res => {
                expect(res.status).to.equal(201);
            })
        });
        });


    // it("UI Test 1.6 - '/api/auth/verify/otp/' api test", () => {

    //     TestData.writeCounterFile();

    //     cy.readFile(Cypress.env('login_data_path')).then(data => {

    //         let body = {
    //             "email": data.email,

    //         };

    //         let api = new Api('/api/auth/verify/email', body, {});
    //         api.post().then(res => {
    //             expect(res.status).to.equal(201);
    //         })
    //     });
    //     });


    it("UI Test 1.7 - '/api/auth/login/' api test", () => {

        TestData.writeCounterFile();

        cy.readFile(Cypress.env('login_data_path')).then(data => {

            let body = {
                "email": data.email,
                "password": data.password,

            };

            let api = new Api('/api/auth/login', body, {});
            api.post().then(res => {
                expect(res.status).to.equal(201);
                expect(res.body.message).to.equal("User logged in successfully");
                
            })
        });
        });
        
}
);

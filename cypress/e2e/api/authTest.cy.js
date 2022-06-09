import "@bahmutov/cy-api"

describe("User login tests", () => {

        let data;

        before(() => {
            cy.fixture('api-data').then(dataJson => {
                data = dataJson;
            });
        });


        it("UI Test 1.1 - '/' base api check", () => {
                cy.request({
                    url: data.baseApi + "/",
                }).its('headers')
                    .its('content-type')
                    .should('include', 'text/html')
                    .and('include', 'charset=utf-8');
            }


        );

        it("UI Test 1.2 - /auth/sign signin endpoint test", () => {
                cy.request({
                        method: "POST",
                        url: data.baseApi + "/auth/sign/",
                        body: {
                            "publicAddress":
                                data.publicAddress,
                        }
                    }
                ).then(response => {
                    expect(response.status).to.eq(201);
                    expect(response.body).to.have.property('data')
                        .to.have.property('accessToken');
                    expect(response.body.data).to.have.property('user');
                    expect(response.headers).to.have.property('content-type').to.include('application/json');
                    expect(response.headers).to.have.property('access-control-allow-origin').to.eq('*');
                    expect(response.headers).to.have.property('connection').to.eq('keep-alive');
                    expect(response.headers).to.have.property('date').to.be.a('string');
                    expect(response.headers).to.have.property('cross-origin-embedder-policy').to.eq('require-corp');
                })
            }
        );

        it("UI Test 1.3 - /auth endpoint test", () => {
                cy.request('POST', data.baseURL + '/auth/sign',
                    {
                        "publicAddress": data.publicAddress,
                    }
                ).then(response => {
                        let token = response.body.data.accessToken;
                        cy.request({
                                url: '/auth', headers: {'Authorization': `Bearer ${token}`}
                            }
                        ).then(response => {
                                expect(response.status).to.eq(200);
                                expect(response.headers).to.have.property('content-type').to.include('application/json');
                                expect(response.headers).to.have.property('access-control-allow-origin').to.eq('*');
                                expect(response.headers).to.have.property('connection').to.eq('keep-alive');
                                expect(response.headers).to.have.property('date').to.be.a('string');
                                expect(response.headers).to.have.property('cross-origin-embedder-policy').to.eq('require-corp');
                                expect(response.body).to.have.property('data').to.have.property('security')
                                expect(response.body).to.have.property('data').to.have.property('publicAddress')
                            }
                        )
                    }
                );
            }
        );
    }
);

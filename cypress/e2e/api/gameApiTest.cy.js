import "@bahmutov/cy-api"
import {Api} from "./base-api";
import {getAdminHeaders, getRandomGameId} from "./utils";

describe("Game API tests", () => {

    let data;
    let base;

    before(() => {
        cy.fixture('api-data').then(dataJson => {
            data = dataJson;
            base = data.baseApi;
        });
    });


    it("UI Test 1.1 - '/game/list'  api endpoint check", () => {
            cy.request({
                url: base + "/game/list",
            }).then(r => {
                cy.log(r.body);
                expect(r.status).to.eq(200);
                expect(r.duration).to.be.lessThan(2000);
                expect(r.body).to.have.property('data');
                typeof expect(r.body.data).to.be.an('array');
                cy.log("duration: ", r.duration);
                expect(r.headers).to.have.property('content-type').to.include('application/json');
                expect(r.headers).to.have.property('access-control-allow-origin').to.eq('*');
                expect(r.headers).to.have.property('connection').to.eq('keep-alive');
                expect(r.headers).to.have.property('cross-origin-embedder-policy').to.eq("require-corp");
                expect(r.headers).to.have.property('date').to.be.a('string');
                expect(r.headers).to.have.property('strict-transport-security').to.eq("max-age=15724800; includeSubDomains");
                expect(r.headers).to.have.property('x-content-type-options').to.eq("nosniff");
                expect(r.headers).to.have.property('x-frame-options').to.eq("SAMEORIGIN");
                expect(r.headers).to.have.property('x-xss-protection').to.eq("0");
            })
        }
    );


    it("UI Test 1.2 - /game/byId/{id} endpoint test", () => {
        cy.request({
            url: base + "/game/list",
        }).then(r => {
            let games = r.body.data;
            let randomGame = games[Math.floor(Math.random() * games.length)];
            let gameId = randomGame._id;
            cy.request({
                url: `${base}/game/byId/${gameId}`,
            }).then(r => {
                expect(r.status).to.eq(200);
                expect(r.body).to.have.property('data');
                expect(r.body.data).to.have.property('_id');
                expect(r.body.data).to.have.property('blockchains');
                expect(r.body.data).to.have.property('createdAt');
                expect(r.body.data).to.have.property('description');
                expect(r.body.data).to.have.property('freeToPlay');
                expect(r.body.data).to.have.property('genres');
                expect(r.body.data).to.have.property('govToken');
                expect(r.body.data).to.have.property('teamMembers');
                expect(r.body.data).to.have.property('utilityToken');
                expect(r.body.data).to.have.property('website');
                expect(r.body.data).to.have.property('whitepaper');
                expect(r.body.data).to.have.property('_id');
                expect(r.duration).to.be.lessThan(2000);
                cy.log("duration: ", r.duration);
                expect(r.headers).to.have.property('content-type').to.include('application/json');
                expect(r.headers).to.have.property('access-control-allow-origin').to.eq('*');
                expect(r.headers).to.have.property('connection').to.eq('keep-alive');
                expect(r.headers).to.have.property('cross-origin-embedder-policy').to.eq("require-corp");
                expect(r.headers).to.have.property('date').to.be.a('string');
                expect(r.headers).to.have.property('strict-transport-security').to.eq("max-age=15724800; includeSubDomains");
                expect(r.headers).to.have.property('x-content-type-options').to.eq("nosniff");
                expect(r.headers).to.have.property('x-frame-options').to.eq("SAMEORIGIN");
                expect(r.headers).to.have.property('x-xss-protection').to.eq("0");
            });
        });
    });

    it("UI Test 1.3 - /game/byId/{id}/image endpoint test", () => {
            getRandomGameId().then(gameId => {
                    cy.request({
                        url: `${base}/game/byId/${gameId}/image`,
                    }).then(r => {
                            expect(r.status).to.eq(200);
                        }
                    );
                }
            );
        }
    );

    it("UI Test 1.4 - /game/add endpoint test", () => {
        getAdminHeaders().then(header => {
            let api = new Api("/game/add", data.newGame, header);
            api.post().then(r => {
                expect(r.body.status).to.eq(201);
            });
        });
    });
});

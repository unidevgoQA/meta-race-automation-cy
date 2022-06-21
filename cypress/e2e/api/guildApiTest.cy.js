import {getRandomGuildId, getAdminHeaders, getRandomGameId} from "./utils";
import {Api} from "./base-api";
import {TestData} from "../../fixtures/testData";


describe("Gild API tests", () => {

    let data;

    before(() => {
        cy.fixture('api-data').then(dataJson => {
            data = dataJson;
        });
    });

    it("TEST 1.1 - /guild/add/ api endpoint test", () => {
        getAdminHeaders().then(header => {
            getRandomGameId().then(gameId => {

                let newGuild = data.newGuild;
                newGuild['name'] = TestData.getFullName();
                newGuild['gamesInvested'] = [gameId];

                let guildApi = new Api(`/guild/add/`, newGuild, header);
                guildApi.post().then(r => {
                    expect(r.status).to.equal(201);
                    expect(r.body).to.have.property('data');
                    expect(r.body.status).to.equal(200);
                    expect(r.body.data).to.have.property('name', newGuild['name']);

                    expect(r.duration).to.be.lessThan(2000);
                    expect(r.headers).to.have.property('content-type').to.include('application/json');
                    expect(r.headers).to.have.property('access-control-allow-origin').to.eq('*');
                    expect(r.headers).to.have.property('connection').to.eq('keep-alive');
                    expect(r.headers).to.have.property('cross-origin-embedder-policy').to.eq("require-corp");
                    expect(r.headers).to.have.property('date').to.be.a('string');
                    expect(r.headers).to.have.property('strict-transport-security').to.eq(
                        "max-age=15724800; includeSubDomains");
                    expect(r.headers).to.have.property('x-content-type-options').to.eq("nosniff");
                    expect(r.headers).to.have.property('x-frame-options').to.eq("SAMEORIGIN");
                    expect(r.headers).to.have.property('x-xss-protection').to.eq("0");
                    expect(r.headers).to.have.property('x-permitted-cross-domain-policies').to.eq("none");
                    expect(r.headers).to.have.property('vary').to.eq("Accept-Encoding");
                    expect(r.headers).to.have.property('referrer-policy').to.eq("no-referrer");
                    expect(r.headers).to.have.property('expect-ct').to.eq("max-age=0");
                    expect(r.headers).to.have.property('cross-origin-opener-policy').to.eq("same-origin");
                    expect(r.headers).to.have.property('content-security-policy').to.eq("default-src 'self'" +
                        ";base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;form-action " +
                        "'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src " +
                        "'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';" +
                        "upgrade-insecure-requests");
                });

            });
        });
    });


    it("TEST 1.2 - /guild/list api endpoint test", () => {
        getAdminHeaders().then(header => {
            let api = new Api("/guild/list", {}, header);
            api.get().then(r => {
                expect(r.status).to.equal(200);
                expect(r.body.data).to.be.an('array');
                expect(r.body.data).to.have.length.greaterThan(0);

                expect(r.duration).to.be.lessThan(2000);
                expect(r.headers).to.have.property('content-type').to.include('application/json');
                expect(r.headers).to.have.property('access-control-allow-origin').to.eq('*');
                expect(r.headers).to.have.property('connection').to.eq('keep-alive');
                expect(r.headers).to.have.property('cross-origin-embedder-policy').to.eq("require-corp");
                expect(r.headers).to.have.property('date').to.be.a('string');
                expect(r.headers).to.have.property('strict-transport-security').to.eq(
                    "max-age=15724800; includeSubDomains");
                expect(r.headers).to.have.property('x-content-type-options').to.eq("nosniff");
                expect(r.headers).to.have.property('x-frame-options').to.eq("SAMEORIGIN");
                expect(r.headers).to.have.property('x-xss-protection').to.eq("0");
                expect(r.headers).to.have.property('x-permitted-cross-domain-policies').to.eq("none");
                expect(r.headers).to.have.property('vary').to.eq("Accept-Encoding");
                expect(r.headers).to.have.property('referrer-policy').to.eq("no-referrer");
                expect(r.headers).to.have.property('expect-ct').to.eq("max-age=0");
                expect(r.headers).to.have.property('cross-origin-opener-policy').to.eq("same-origin");
                expect(r.headers).to.have.property('content-security-policy').to.eq("default-src 'self'" +
                    ";base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;form-action " +
                    "'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src " +
                    "'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';" +
                    "upgrade-insecure-requests");
            });

        });
    });


    it("TEST 1.3 - /guild/byId/{id} api endpoint test", () => {
        getAdminHeaders().then(header => {
            getRandomGuildId().then(guildId => {
                let api = new Api(`/guild/byId/${guildId}`, {}, header);
                api.get().then(r => {
                    expect(r.status).to.equal(200);
                    expect(r.body.status).to.equal(200);
                    expect(r.body.data).to.have.all.keys(['_id', 'name', 'description', 'founded', 'founders',
                        'location', 'teamSize', 'orgStructure', 'aum', 'largeHoldings', 'discordMembers', 'scholars',
                        'funding', 'fundingRounds', 'leadInvestors', 'currentProducts', 'futureProducts',
                        'gamesInvested', 'treasuryWallets', 'createdAt', 'updatedAt', '__v']);

                    expect(r.duration).to.be.lessThan(2000);
                    expect(r.headers).to.have.property('content-type').to.include('application/json');
                    expect(r.headers).to.have.property('access-control-allow-origin').to.eq('*');
                    expect(r.headers).to.have.property('connection').to.eq('keep-alive');
                    expect(r.headers).to.have.property('cross-origin-embedder-policy').to.eq("require-corp");
                    expect(r.headers).to.have.property('date').to.be.a('string');
                    expect(r.headers).to.have.property('strict-transport-security').to.eq(
                        "max-age=15724800; includeSubDomains");
                    expect(r.headers).to.have.property('x-content-type-options').to.eq("nosniff");
                    expect(r.headers).to.have.property('x-frame-options').to.eq("SAMEORIGIN");
                    expect(r.headers).to.have.property('x-xss-protection').to.eq("0");
                    expect(r.headers).to.have.property('x-permitted-cross-domain-policies').to.eq("none");
                    expect(r.headers).to.have.property('vary').to.eq("Accept-Encoding");
                    expect(r.headers).to.have.property('referrer-policy').to.eq("no-referrer");
                    expect(r.headers).to.have.property('expect-ct').to.eq("max-age=0");
                    expect(r.headers).to.have.property('cross-origin-opener-policy').to.eq("same-origin");
                    expect(r.headers).to.have.property('content-security-policy').to.eq("default-src 'self'" +
                        ";base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;form-action " +
                        "'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src " +
                        "'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';" +
                        "upgrade-insecure-requests");
                });
            });
        });
    });

    it("TEST 1.4 - /guild/update/{id} api endpoint test", () => { //TODO: giving 500 - trying with admin headers

        getAdminHeaders().then(header => {
            getRandomGuildId().then(guildId => {
                let guildApi = new Api(`/guild/update/${guildId}`, {}, header);

                getRandomGameId().then(gameId => {
                    let api = new Api(`/guild/byId/${guildId}`, {}, header);
                    api.get().then(r => {
                        let desc = TestData.getDescription();
                        console.log(desc)
                        let guild = r.body.data;
                        let newGuild = {...guild, "description": desc};
                        console.log("original ", guild)
                        console.log("updated ", newGuild);

                        guildApi.put(newGuild).then(r => {
                            expect(r.status).to.equal(200);
                            expect(r.body).to.have.property('data');
                            expect(r.body.data).to.have.property('description', desc);

                            expect(r.duration).to.be.lessThan(2000);
                            expect(r.headers).to.have.property('content-type').to.include('application/json');
                            expect(r.headers).to.have.property('access-control-allow-origin').to.eq('*');
                            expect(r.headers).to.have.property('connection').to.eq('keep-alive');
                            expect(r.headers).to.have.property('cross-origin-embedder-policy').to.eq("require-corp");
                            expect(r.headers).to.have.property('date').to.be.a('string');
                            expect(r.headers).to.have.property('strict-transport-security').to.eq(
                                "max-age=15724800; includeSubDomains");
                            expect(r.headers).to.have.property('x-content-type-options').to.eq("nosniff");
                            expect(r.headers).to.have.property('x-frame-options').to.eq("SAMEORIGIN");
                            expect(r.headers).to.have.property('x-xss-protection').to.eq("0");
                            expect(r.headers).to.have.property('x-permitted-cross-domain-policies').to.eq("none");
                            expect(r.headers).to.have.property('vary').to.eq("Accept-Encoding");
                            expect(r.headers).to.have.property('referrer-policy').to.eq("no-referrer");
                            expect(r.headers).to.have.property('expect-ct').to.eq("max-age=0");
                            expect(r.headers).to.have.property('cross-origin-opener-policy').to.eq("same-origin");
                            expect(r.headers).to.have.property('content-security-policy').to.eq("default-src 'self'" +
                                ";base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;form-action " +
                                "'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src " +
                                "'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';" +
                                "upgrade-insecure-requests");
                        });
                    });
                });

            });
        });
    });


    it("TEST 1.5 - /guild/remove/{Id} api endpoint test", () => {

        getAdminHeaders().then(header => {
            getRandomGuildId().then(guildId => {
                let guildRemoveApi = new Api(`/guild/remove/${guildId}`, {}, header);

                guildRemoveApi.delete().then(r => {
                    expect(r.status).to.equal(200);
                    expect(r.body).to.have.property('data', true);
                    expect(r.body.status).to.equal(200);

                    expect(r.duration).to.be.lessThan(2000);
                    expect(r.headers).to.have.property('content-type').to.include('application/json');
                    expect(r.headers).to.have.property('access-control-allow-origin').to.eq('*');
                    expect(r.headers).to.have.property('connection').to.eq('keep-alive');
                    expect(r.headers).to.have.property('cross-origin-embedder-policy').to.eq("require-corp");
                    expect(r.headers).to.have.property('date').to.be.a('string');
                    expect(r.headers).to.have.property('strict-transport-security').to.eq(
                        "max-age=15724800; includeSubDomains");
                    expect(r.headers).to.have.property('x-content-type-options').to.eq("nosniff");
                    expect(r.headers).to.have.property('x-frame-options').to.eq("SAMEORIGIN");
                    expect(r.headers).to.have.property('x-xss-protection').to.eq("0");
                    expect(r.headers).to.have.property('x-permitted-cross-domain-policies').to.eq("none");
                    expect(r.headers).to.have.property('vary').to.eq("Accept-Encoding");
                    expect(r.headers).to.have.property('referrer-policy').to.eq("no-referrer");
                    expect(r.headers).to.have.property('expect-ct').to.eq("max-age=0");
                    expect(r.headers).to.have.property('cross-origin-opener-policy').to.eq("same-origin");
                    expect(r.headers).to.have.property('content-security-policy').to.eq("default-src 'self'" +
                        ";base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;form-action " +
                        "'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src " +
                        "'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';" +
                        "upgrade-insecure-requests");
                });

            });
        });
    });


});

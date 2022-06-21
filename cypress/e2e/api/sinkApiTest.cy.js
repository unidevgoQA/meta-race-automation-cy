import {getRandomGameId, getAdminHeaders, getRandomSinkId} from "./utils";
import {Api} from "./base-api";
import {TestData} from "../../fixtures/testData";


describe("Sink API tests", () => {

    let data;

    before(() => {
        cy.fixture('api-data').then(dataJson => {
            data = dataJson;
        });
    });

    it("TEST 1.1 - /sink/list api endpoint test", () => {
        getAdminHeaders().then(header => {
            let api = new Api("/sink/list", {}, header);
            api.get().then(r => {
            expect(r.status).to.equal(200);
            expect(r.body.data).to.be.an('array');
            expect(r.body.data).to.have.length.greaterThan(0);
            expect(r.body.data[0]).to.have.all.keys(['__v', '_id', 'contractAddress', 'createdAt', 'game', 'inflationary', 'name', 'purpose', 'updatedAt']);

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

    it("TEST 1.2 - /sink/byId{id} api endpoint test", () => {
        getAdminHeaders().then(header => {
            getRandomSinkId().then(sinkId => {
                let api = new Api(`/sink/byId/${sinkId}`, {}, header);
                api.get().then(r => {
                expect(r.status).to.equal(200);
                expect(r.body.status).to.equal(200);
                expect(r.body.data).to.have.all.keys(['__v', '_id', 'contractAddress', 'createdAt', 'game', 'inflationary', 'name', 'purpose', 'updatedAt']);

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


    it("TEST 1.3 - /sink/list/byGameId/ api endpoint test", () => {
        getAdminHeaders().then(header => {
            getRandomGameId().then(gameId => {
                let api = new Api(`/sink/list/byGameId/${gameId}`, {}, header);
                api.get().then(r => {
                expect(r.status).to.equal(200);
                expect(r.body.status).to.equal(200);
                expect(r.body).to.have.property('data');

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

    it("TEST 1.4 - /sink/add/{gameId} api endpoint test", () => {
        getAdminHeaders().then(header => {
            getRandomGameId().then(gameId => {
                let api = new Api(`/sink/add/${gameId}`, data.newSink, header);
                api.post().then(r => {
                expect(r.status).to.equal(201);
                expect(r.body).to.have.property('data');

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


    it("TEST 1.5 - /sink/update/{sinkId} api endpoint test", () => {

        getAdminHeaders().then(header => {
            getRandomSinkId().then(sinkId => {
                let api = new Api(`/sink/update/${sinkId}`, {}, header);

                let newSinkName = TestData.getFullName();

                api.put({"name": newSinkName}).then(r => {
                    expect(r.status).to.equal(200);
                    expect(r.body).to.have.property('data');
                    expect(r.body.data).to.have.property('name', newSinkName);

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



    it("TEST 1.6 - /sink/remove/{Id} api endpoint test", () => {

        getAdminHeaders().then(header => {
            getRandomSinkId().then(sinkId => {
                let api = new Api(`/sink/remove/${sinkId}`, {}, header);

                api.delete().then(r => {
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

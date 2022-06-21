import {getRandomGameId, getAdminHeaders, getRandomSinkId, getRandomMemberId} from "./utils";
import {Api} from "./base-api";
import {TestData} from "../../fixtures/testData";


describe("Member API tests", () => {

    let data;

    before(() => {
        cy.fixture('api-data').then(dataJson => {
            data = dataJson;
        });
    });

    it("TEST 1.1 - /member/list api endpoint test", () => {
        getAdminHeaders().then(header => {
            let api = new Api("/member/list", {}, header);
            api.get().then(r => {
            expect(r.status).to.equal(200);
            expect(r.body.data).to.be.an('array');
            expect(r.body.data).to.have.length.greaterThan(0);
            expect(r.body.data[0]).to.have.all.keys(['_id', 'game', 'name', 'role', 'doxxed', 'gameExperience', 'socials', 'createdAt', 'updatedAt', '__v']);

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

    it("TEST 1.2 - /member/byId/{memberId} api endpoint test", () => {
        getAdminHeaders().then(header => {
            getRandomMemberId().then(memberId => {
                let api = new Api(`/member/byId/${memberId}`, {}, header);
                api.get().then(r => {
                    expect(r.status).to.equal(200);
                    expect(r.body.status).to.equal(200);
                    expect(r.body.data).to.have.all.keys(['_id', 'game', 'name', 'role', 'doxxed', 'gameExperience', 'socials', 'createdAt', 'updatedAt', '__v']);

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

    it("TEST 1.3 - /member/list/byGameId/{gameId} api endpoint test", () => {
        getAdminHeaders().then(header => {
            getRandomGameId().then(gameId => {
                let api = new Api(`/member/list/byGameId/${gameId}`, {}, header);
                api.get().then(r => {
                    expect(r.status).to.equal(200);
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


    it("TEST 1.4 - /member/add/{gameId} api endpoint test", () => {
        getAdminHeaders().then(header => {
            getRandomGameId().then(gameId => {

                let newMember = data.newMember;
                let newName = TestData.getFullName();
                let newRole = TestData.getRandomPosition();
                newMember['name'] = newName;
                newMember['role'] = newRole;

                let memberAddApi = new Api(`/member/add/${gameId}`, newMember, header);
                memberAddApi.post().then(r => {
                    expect(r.status).to.equal(201);
                    expect(r.body).to.have.property('data');
                    expect(r.body.status).to.equal(200);
                    expect(r.body.data).to.have.property('name', newName);
                    expect(r.body.data).to.have.property('role', newRole);

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

    it("TEST 1.5 - /member/update/{id} api endpoint test", () => {

        getAdminHeaders().then(header => {
            getRandomMemberId().then(memberId => {
                let api = new Api(`/member/update/${memberId}`, {}, header);

                let memberApi = new Api(`/member/byId/${memberId}`, {}, header);
                memberApi.get().then(r => {
                    let member = r.body.data;
                    let updatedMember = {...member, "role": TestData.getRandomPosition()};

                api.put(updatedMember).then(r => {
                    expect(r.status).to.equal(200);
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
    });



    it("TEST 1.6 - /member/remove/{Id} api endpoint test", () => {

        getAdminHeaders().then(header => {
            getRandomMemberId().then(memberId => {
                let memberRemoveApi = new Api(`/member/remove/${memberId}`, {}, header);

                memberRemoveApi.delete().then(r => {
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

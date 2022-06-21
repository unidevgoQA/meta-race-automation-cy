import {getRandomGameId, getAdminHeaders} from "./utils";
import {Api} from "./base-api";


describe("Performance API tests", () => {

    it("TEST 1.1 - /performance/token/price/{gameId} api endpoint test", () => {
        getAdminHeaders().then(headers => {
            getRandomGameId().then(gameId => {
                let api = new Api(`/performance/token/price/${gameId}`, {}, headers);
                api.get().then(r => {
                    expect(r.status).to.eq(200);
                    expect(r.body).to.have.property('data');
                    expect(r.body).to.have.property('status').to.eq(200);
                    expect(r.body.data).to.have.property('categories');
                    expect(r.body.data).to.have.property('series');
                    expect(r.statusText).to.eq('OK');
                    expect(r.isOkStatusCode).to.eq(true);
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

    it("TEST 1.2 - /performance/token/volume/{gameId} api endpoint test", () => {
        getAdminHeaders().then(headers => {
            getRandomGameId().then(gameId => {
                let api = new Api(`/performance/token/volume/${gameId}`, {}, headers);
                api.get().then(r => {
                    expect(r.status).to.eq(200);
                    expect(r.body).to.have.property('data');
                    expect(r.body).to.have.property('status').to.eq(200);
                    expect(r.body.data).to.have.property('categories');
                    expect(r.body.data).to.have.property('series');
                    expect(r.statusText).to.eq('OK');
                    expect(r.isOkStatusCode).to.eq(true);
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


    it("TEST 1.3 - /performance/token/holder-dist/{gameId} api endpoint test", () => {
        getAdminHeaders().then(headers => {
            getRandomGameId().then(gameId => {
                let api = new Api(`/performance/token/holder-dist/${gameId}`, {}, headers);
                api.get().then(r => {
                    expect(r.status).to.eq(200);
                    expect(r.body).to.have.property('data');
                    expect(r.body).to.have.property('status').to.eq(200);
                    expect(r.body.data).to.have.property('categories');
                    expect(r.body.data).to.have.property('series');
                    expect(r.statusText).to.eq('OK');
                    expect(r.isOkStatusCode).to.eq(true);
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


    it("TEST 1.3 - /performance/token/time-held-dist/{gameId} api endpoint test", () => {
        getAdminHeaders().then(headers => {
            getRandomGameId().then(gameId => {
                let api = new Api(`/performance/token/time-held-dist/${gameId}`, {}, headers);
                api.get().then(r => {
                    expect(r.status).to.eq(200);
                    expect(r.body).to.have.property('data');
                    expect(r.body).to.have.property('status').to.eq(200);
                    expect(r.body.data).to.have.property('categories');
                    expect(r.body.data).to.have.property('series');
                    expect(r.statusText).to.eq('OK');
                    expect(r.isOkStatusCode).to.eq(true);
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

    it("TEST 1.4 - /performance/nft/sales/{gameId} api endpoint test", () => {
        getAdminHeaders().then(headers => {
            getRandomGameId().then(gameId => {
                let api = new Api(`/performance/nft/sales/${gameId}`, {}, headers);
                api.get().then(r => {
                    expect(r.status).to.eq(200);
                    expect(r.body).to.have.property('data');
                    expect(r.body).to.have.property('status').to.eq(200);
                    expect(r.body.data).to.have.property('categories');
                    expect(r.body.data).to.have.property('series');
                    expect(r.statusText).to.eq('OK');
                    expect(r.isOkStatusCode).to.eq(true);
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


    it("TEST 1.4 - /performance/nft/volume/{gameId} api endpoint test", () => {
        getAdminHeaders().then(headers => {
            getRandomGameId().then(gameId => {
                let api = new Api(`/performance/nft/volume/${gameId}`, {}, headers);
                api.get().then(r => {
                    expect(r.status).to.eq(200);
                    expect(r.body).to.have.property('data');
                    expect(r.body).to.have.property('status').to.eq(200);
                    expect(r.body.data).to.have.property('categories');
                    expect(r.body.data).to.have.property('series');
                    expect(r.statusText).to.eq('OK');
                    expect(r.isOkStatusCode).to.eq(true);
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

    it("TEST 1.5 - /performance/nft/holder-dist/{gameId} api endpoint test", () => {
        getAdminHeaders().then(headers => {
            getRandomGameId().then(gameId => {
                let api = new Api(`/performance/nft/holder-dist/${gameId}`, {}, headers);
                api.get().then(r => {
                    expect(r.status).to.eq(200);
                    expect(r.body).to.have.property('data');
                    expect(r.body).to.have.property('status').to.eq(200);
                    expect(r.body.data).to.have.property('categories');
                    expect(r.body.data).to.have.property('series');
                    expect(r.statusText).to.eq('OK');
                    expect(r.isOkStatusCode).to.eq(true);
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


    it("TEST 1.6 - /performance/nft/time-holder-dist/{gameId} api endpoint test", () => {
        getAdminHeaders().then(headers => {
            getRandomGameId().then(gameId => {
                let api = new Api(`/performance/nft/time-held-dist/${gameId}`, {}, headers);
                api.get().then(r => {
                    expect(r.status).to.eq(200);
                    expect(r.body).to.have.property('data');
                    expect(r.body).to.have.property('status').to.eq(200);
                    expect(r.body.data).to.have.property('categories');
                    expect(r.body.data).to.have.property('series');
                    expect(r.statusText).to.eq('OK');
                    expect(r.isOkStatusCode).to.eq(true);
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

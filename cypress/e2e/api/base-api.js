
export class Api {
    constructor(endpoint, body, headers) {
        this.baseUrl = Cypress.env('baseApi');
        this.endpoint = endpoint;
        this.body = body;
        this.headers = headers;
    }

    get() {
        return cy.request(
            {
                method: "GET",
                url: this.baseUrl + this.endpoint,
                body: this.body,
                headers: this.headers,
            }
        );

    }

    post() {
        return cy.request(
            {
                method: "POST",
                url: this.baseUrl + this.endpoint,
                body: this.body,
                headers: this.headers,
            }
        );
    }

    put(body) {
        return cy.request(
            {
                method: "PUT",
                url: this.baseUrl + this.endpoint,
                body: body,
                headers: this.headers,
            }
        );
    }

    delete() {
        return cy.request(
            {
                method: "DELETE",
                url: this.baseUrl + this.endpoint,
                body: this.body,
                headers: this.headers,
            }
        );
    }

}

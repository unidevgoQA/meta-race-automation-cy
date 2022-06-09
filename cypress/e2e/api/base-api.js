export class BaseApi {
    constructor(endpoint, method, body={}) {
        this.baseUrl = process.env.BASEAPI;
        this.endpoint = endpoint;
        this.method = method;
        this.body = body;
    }

    url = this.baseUrl + this.endpoint;

    get() {
        cy.request(
            {
                method: this.method,
                url: this.url,
                body: this.body
            }
        )
    }

    post = () => {
        cy.request(
            {
                method: this.method,
                url: this.url,
                body: this.body
            }
        )
    }
}

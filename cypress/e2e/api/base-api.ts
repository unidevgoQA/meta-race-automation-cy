export class Api {
  baseUrl: string;
  constructor(
    private endpoint: string,
    public body: {} = {},
    public headers: {} = {}
  ) {
    this.baseUrl = Cypress.env("baseApi");
    this.endpoint = endpoint;
    this.body = body;
    this.headers = headers;
  }

  get() {
    return cy.request({
      method: "GET",
      url: this.baseUrl + this.endpoint,
      body: this.body,
      headers: this.headers,
    });
  }

  post(body?: {}) {
    if (body) {
      return cy.request({
        method: "POST",
        url: this.baseUrl + this.endpoint,
        body: body,
        headers: this.headers,
      });
    } else {
      return cy.request({
        method: "POST",
        url: this.baseUrl + this.endpoint,
        body: this.body,
        headers: this.headers,
      });
    }
  }

  put(body: {}) {
    return cy.request({
      method: "PUT",
      url: this.baseUrl + this.endpoint,
      body: body,
      headers: this.headers,
    });
  }

  delete() {
    return cy.request({
      method: "DELETE",
      url: this.baseUrl + this.endpoint,
      body: this.body,
      headers: this.headers,
    });
  }
}

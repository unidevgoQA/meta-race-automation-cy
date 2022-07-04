describe("Home Page", () => {

    it("should display the home page", () => {
        cy.visit("https://qa.metadog.racing/");
        cy.contains("Make money by racing dogs")
    });

    it("should display the GET STARTED button", () => {
        cy.contains("GET STARTED")
    });

    it("should display the Join the new world champions club", () => {
        cy.contains("Join the new world champions club")
    });

    it("should display the Our story starts now header", () => {
        cy.contains("Our story starts now");
    });

    it("should display the Join Metadog Race community!", () => {
        cy.contains("Join Metadog Race community!");
    });

    it("should display Subscribe button", () => {
        cy.contains('SUBSCRIBE')
    })

});

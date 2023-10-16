describe('Petshop Client User Tests', () => {
    before(() => {
        cy.getClientUserAuthToken(Cypress.env('CLIENT_USERNAME'), Cypress.env('CLIENT_PASSWORD')); // Call the custom command to get the token
    });

    it('Buckhill Client User Petshop Test', function(){
        cy.visit('/')
        // Lord have mercy, but you don't have static ID's - I tried to grab the dynamic elements in a static way but couldnt, so here we go the nasty way.
        cy.get('.ml-6').click();
        cy.get('#input-10').type(Cypress.env('CLIENT_USERNAME'));
        cy.get('#input-12').type(Cypress.env('CLIENT_PASSWORD'));
        cy.get('body > div.v-overlay-container > div > div.v-overlay__content > div > button').click();
    })
})
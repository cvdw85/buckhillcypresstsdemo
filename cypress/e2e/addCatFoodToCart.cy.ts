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
        cy.get('#input-4').type('Food')
                          .type('{enter}');
        cy.get('div.v-list.v-theme--PetGreen.v-list--density-compact.v-list--one-line > div:nth-child(1) > div > span').click();
        cy.get('.product__actions-wrapper > .v-btn').click();
        cy.get(':nth-child(3) > :nth-child(1) > .v-btn__content').click();
        cy.get('.v-toolbar__content > .v-container > :nth-child(3) > :nth-child(1)').should('have.text', ' Cart (1) ');
        cy.get('div.product__action-btn.d-flex.mt-10 > button > span.v-btn__content').should('have.text', ' Remove from cart ');
    })
})
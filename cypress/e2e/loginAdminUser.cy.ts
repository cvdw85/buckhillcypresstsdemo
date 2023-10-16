describe('Petshop Admin Tests', () => {
    before(() => {
        cy.getAdminUserAuthToken(Cypress.env('ADMIN_USERNAME'), Cypress.env('ADMIN_PASSWORD')); // Call the custom command to get the token
    });

    it('Buckhill Admin Petshop Test', function(){
        cy.visit('/login')
        // Lord have mercy, but you don't have static ID's - I tried to grab the dynamic elements in a static way but couldnt, so here we go the nasty way.
        cy.get('#input-0')
            .type(Cypress.env('ADMIN_USERNAME'))
            .type('{enter}')
            cy.get('#input-2')
            .type(Cypress.env('ADMIN_PASSWORD'))
            .type('{enter}')
        cy.get('.v-btn').click();
    })
})
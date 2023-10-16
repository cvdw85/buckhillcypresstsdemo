import ClientUserLandingPage from '../page-objects/ClientUserLandingPage';

describe('Petshop Client User Tests', () => {
    before(() => {
        cy.getClientUserAuthToken(Cypress.env('CLIENT_USERNAME'), Cypress.env('CLIENT_PASSWORD'));
    });

    it('Buckhill Client User Petshop Test', function(){
        ClientUserLandingPage.visit();
        ClientUserLandingPage.clickLoginButton();
        ClientUserLandingPage.fillUsername(Cypress.env('CLIENT_USERNAME'));
        ClientUserLandingPage.fillPassword(Cypress.env('CLIENT_PASSWORD'));
        ClientUserLandingPage.clickFormLoginButton();
        cy.get('#input-4').type('Food')
                          .type('{enter}');
        cy.get('div.v-list.v-theme--PetGreen.v-list--density-compact.v-list--one-line > div:nth-child(1) > div > span').click();
        cy.get('.product__actions-wrapper > .v-btn').click();
        cy.get(':nth-child(3) > :nth-child(1) > .v-btn__content').click();
        cy.get('.v-toolbar__content > .v-container > :nth-child(3) > :nth-child(1)').should('have.text', ' Cart (1) ');
        cy.get('div.product__action-btn.d-flex.mt-10 > button > span.v-btn__content').should('have.text', ' Remove from cart ');
    })
})
import ClientUserLandingPage from '../page-objects/ClientUserLandingPage';

describe('Petshop Client User Tests', () => {
    before(() => {
        cy.getClientUserAuthToken(Cypress.env('CLIENT_USERNAME'), Cypress.env('CLIENT_PASSWORD')); // Call the custom command to get the token
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
        cy.get('div.product__price.mt-5.text-primary').should('have.text', '35.13 kn ');
        cy.get('p.prodcut__title.text-primary.text-h5').should('have.text', 'Purina Fancy Feast Gravy Wet Cat Food Variety Pack, Seafood Grilled Collection - (24) 3 oz. Cans');
    })
})
import AdminLoginPage from '../page-objects/AdminLoginPage';
import AdminProductsPage from '../page-objects/AdminProductsPage';

describe('Petshop Admin Tests', () => {
    before(() => {
        cy.getAdminUserAuthToken(Cypress.env('ADMIN_USERNAME'), Cypress.env('ADMIN_PASSWORD')); // Call the custom command to get the token
    });

    it('Buckhill Admin Petshop Test', function(){
        AdminLoginPage.visit();
        AdminLoginPage.fillUsername(Cypress.env('ADMIN_USERNAME'));
        AdminLoginPage.fillPassword(Cypress.env('ADMIN_PASSWORD'));
        AdminLoginPage.clickLoginButton();
        cy.get(':nth-child(4) > :nth-child(1) > a > .v-list-item > .v-list-item__content > .v-list-item-title').click();
        cy.get('.table-header__content > .v-btn > .v-btn__content').click();
        cy.get('div.v-col.v-col-12.pb-0 > div:nth-child(2) > p').should('have.text', 'Product Image');
    })
})
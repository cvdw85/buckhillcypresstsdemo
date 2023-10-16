import AdminLoginPage from '../page-objects/AdminLoginPage';

describe('Petshop Admin Tests', () => {
    before(() => {
        cy.getAdminUserAuthToken(Cypress.env('ADMIN_USERNAME'), Cypress.env('ADMIN_PASSWORD'));
    });

    it('Buckhill Admin Petshop Test', function(){
        AdminLoginPage.visit();
        AdminLoginPage.fillUsername(Cypress.env('ADMIN_USERNAME'));
        AdminLoginPage.fillPassword(Cypress.env('ADMIN_PASSWORD'));
        AdminLoginPage.clickLoginButton();
    })
})
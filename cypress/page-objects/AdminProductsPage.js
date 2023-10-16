class AdminProductsPage {
    visit() {
      cy.visit('/login');
    }
  
    fillUsername(username) {
      cy.get('#username').type(username);
    }
  
    fillPassword(password) {
      cy.get('#password').type(password);
    }
  
    submit() {
      cy.get('button[type="submit"]').click();
    }
  }
  
  export default new AdminProductsPage();
class AdminLoginPage {
    visit() {
      cy.visit('/login');
    }
  
    fillUsername(username) {
      cy.get('#input-0')
        .type(username)
        .type('{enter}')
    }
  
    fillPassword(password) {
      cy.get('#input-2')
        .type(password)
        .type('{enter}')
    }
  
    clickLoginButton() {
      cy.get('.v-btn').click();
    }
  }
  
  export default new AdminLoginPage();
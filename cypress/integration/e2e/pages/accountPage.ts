class AccountPage {
  verifyAccountPage() {
    cy.url().should("include", "/member-portal");
  }

  enterEmail() {
    const email = Cypress.env("username");
    cy.get('[data-testid="general_email_email"]').type(email);
  }

  enterPassword() {
    const password = Cypress.env("password");
    cy.get('[data-testid="general_password_password"]').type(password);
  }

  clickSignIn() {
    cy.get('[data-testid="Login_SignIn_Button"]').click();
  }
}

export default new AccountPage();

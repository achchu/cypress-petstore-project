class HomePage {
  visit() {
    const url = Cypress.env("uiUrl");
    cy.visit(url);
  }

  acceptCookies() {
    cy.get("#onetrust-accept-btn-handler").click();
  }

  selectMyAccount() {
    cy.get(".sh-nav__utility > .sh-button").click();
  }

  selectGetHealthPlan() {
    //This needs to be refactored on the website to include dataids
    cy.get("#button1148957918-1").click();
  }
}

export default new HomePage();

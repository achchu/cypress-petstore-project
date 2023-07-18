class HealthPlanPage {
  verifyHealthPlanPage() {
    cy.url().should("include", "/health-plan");
  }

  clickChoosePlan() {
    cy.get("#button1046153040-1")
      .should("have.text", "Choose your plan")
      .click();
  }

  choosePlanValue() {
    //needs to be refactored and replaced with data-ids
    cy.get("#sh-premiums button.sh-level-button:nth-child(3)")
      .contains("£40")
      .click();
  }

  clickFinalPlan() {
    cy.get("#sh-choose-plan-button").click();
  }
}

export default new HealthPlanPage();

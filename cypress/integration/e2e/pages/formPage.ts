class FormPage {
  verifyFormPage() {
    cy.url().should("include", "/products/consumers/simplyhealth/cp");
  }

  enterFirstName(firstName: string) {
    cy.get("#AboutYou_firstName_TextInput").type(firstName);
  }

  enterLastName(lastName: string) {
    cy.get("#AboutYou_lastName_TextInput").type(lastName);
  }

  proceedFromName() {
    cy.get("#AboutYou_Next_Button").click();
  }

  enterDob(day: string, month: string, year: string) {
    cy.get("#DateOfBirth_dateOfBirth_day_SelectInput").select(day);
    cy.get("#DateOfBirth_dateOfBirth_month_SelectInput").select(month);
    cy.get("#DateOfBirth_dateOfBirth_year_SelectInput").select(year);
  }

  proceedFromDob() {
    cy.get("#DateOfBirth_Next_Button").click();
  }
}

export default new FormPage();

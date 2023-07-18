import { healthPlanJourney } from "../journeys/healthPlanJourney";

describe("User Journey for Health Plan Creation", () => {
  it("completes the journey by filling out personal details and selecting a health plan", () => {
    cy.fixture("userData.json").then((userData) => {
      healthPlanJourney(userData.firstName, userData.lastName, userData.dob);
    });
  });
});

import HomePage from "../pages/homePage";
import { homePageJourney } from "../journeys/homePageJourney.";

describe("Homepage", () => {
  before(() => {
    HomePage.visit();
  });

  it("should validate the homepage", () => {
    homePageJourney();
  });

  // Add more test cases here
});

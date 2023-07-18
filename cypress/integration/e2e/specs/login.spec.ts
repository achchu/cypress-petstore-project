import { loginJourney } from "../journeys/loginJourney";

describe("Login journey", () => {
  it("should successfully login to the accounts page", () => {
    loginJourney();
  });
});

import HomePage from "../pages/homePage";

export function homePageJourney() {
  HomePage.visit();
  HomePage.acceptCookies();
  HomePage.selectMyAccount();
}

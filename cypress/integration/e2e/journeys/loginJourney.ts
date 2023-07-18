import HomePage from "../pages/homePage";
import AccountPage from "../pages/accountPage";

export function loginJourney() {
  HomePage.visit();
  HomePage.acceptCookies();
  HomePage.selectMyAccount();
  AccountPage.verifyAccountPage();
  AccountPage.enterEmail();
  AccountPage.enterPassword();
  AccountPage.clickSignIn();
}

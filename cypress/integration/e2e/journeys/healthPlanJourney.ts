import HomePage from "../pages/homePage";
import HealthPlanPage from "../pages/healthPlanPage";
import FormPage from "../pages/formPage";

export function healthPlanJourney(
  firstName: string,
  lastName: string,
  dob: { day: string; month: string; year: string }
) {
  HomePage.visit();
  HomePage.acceptCookies();
  HomePage.selectGetHealthPlan();
  HealthPlanPage.verifyHealthPlanPage();
  HealthPlanPage.clickChoosePlan();
  HealthPlanPage.choosePlanValue();
  HealthPlanPage.clickFinalPlan();
  FormPage.verifyFormPage();
  FormPage.enterFirstName(firstName);
  FormPage.enterLastName(lastName);
  FormPage.proceedFromName();
  FormPage.enterDob(dob.day, dob.month, dob.year);
  FormPage.proceedFromDob();
}

$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com/carfax/features/UCLSignInBtn.feature");
formatter.feature({
  "name": "Forgot Password and Create account trough Sign in feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Forgot password through SignIn option",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tc-2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on main Carfax page",
  "keyword": "Given "
});
formatter.match({
  "location": "SaveThisSearchStepDef.i_am_on_main_Carfax_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to Find a Used Car page",
  "keyword": "And "
});
formatter.match({
  "location": "SaveThisSearchStepDef.i_navigate_to_Find_a_Used_Car_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Sign In button",
  "keyword": "When "
});
formatter.match({
  "location": "UCLSignInStepDef.i_click_on_Sign_In_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can fill out email , password",
  "keyword": "And "
});
formatter.match({
  "location": "UCLSignInStepDef.i_can_fill_out_email_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "If i see error message",
  "keyword": "And "
});
formatter.match({
  "location": "UCLSignInStepDef.if_i_see_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Forgot Password button",
  "keyword": "Then "
});
formatter.match({
  "location": "UCLSignInStepDef.i_click_on_Forgot_Password_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill out email and click on reset password",
  "keyword": "And "
});
formatter.match({
  "location": "UCLSignInStepDef.i_fill_out_email_and_click_on_reset_password()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com/carfax/features/UCLSignUpBtn.feature");
formatter.feature({
  "name": "Create account",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Create account through UCL page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
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
  "name": "I click on Sign Up button from UCL",
  "keyword": "When "
});
formatter.match({
  "location": "UCLSignUpBtnStepDef.i_click_on_Sign_Up_button_from_UCL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill out \"email\" , \"password\" , \"zipcode\" to create a new account",
  "keyword": "And "
});
formatter.match({
  "location": "UCLSignUpBtnStepDef.i_fill_out_to_create_a_new_account(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Create account button",
  "keyword": "Then "
});
formatter.match({
  "location": "UCLSignUpBtnStepDef.i_click_on_Create_account_button()"
});
formatter.result({
  "status": "passed"
});
});
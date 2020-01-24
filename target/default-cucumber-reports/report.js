$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com/carfax/features/UCLSignUpBtn.feature");
formatter.feature({
  "name": "Create account",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Already exist credentials login trough sign Up page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@signUp"
    }
  ]
});
formatter.step({
  "name": "I am on main Carfax page",
  "keyword": "Given "
});
formatter.step({
  "name": "I navigate to Find a Used Car page",
  "keyword": "And "
});
formatter.step({
  "name": "I click on Sign Up button from UCL",
  "keyword": "When "
});
formatter.step({
  "name": "I fill out \"\u003cemail\u003e\" , \"\u003cpassword\u003e\" , \"\u003czipcode\u003e\" to create a new account",
  "keyword": "And "
});
formatter.step({
  "name": "I see regular sign in page",
  "keyword": "Then "
});
formatter.step({
  "name": "I can fill out \"\u003cemail\u003e\" , \"\u003cpassword\u003e\" and log in to account",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "zipcode",
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "22201",
        "beta1@gmail.com",
        "Qwe123123"
      ]
    },
    {
      "cells": [
        "20142",
        "betasav2@gmail.com",
        "Qwe123123"
      ]
    },
    {
      "cells": [
        "22304",
        "betasav1@gmail.com",
        "Qwe123123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Already exist credentials login trough sign Up page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@signUp"
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
  "name": "I fill out \"beta1@gmail.com\" , \"Qwe123123\" , \"22201\" to create a new account",
  "keyword": "And "
});
formatter.match({
  "location": "UCLSignUpBtnStepDef.i_fill_out_to_create_a_new_account(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see regular sign in page",
  "keyword": "Then "
});
formatter.match({
  "location": "UCLSignUpBtnStepDef.i_see_regular_sign_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can fill out \"beta1@gmail.com\" , \"Qwe123123\" and log in to account",
  "keyword": "And "
});
formatter.match({
  "location": "UCLSignUpBtnStepDef.i_can_fill_out_and_log_in_to_account(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Already exist credentials login trough sign Up page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@signUp"
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
  "name": "I fill out \"betasav2@gmail.com\" , \"Qwe123123\" , \"20142\" to create a new account",
  "keyword": "And "
});
formatter.match({
  "location": "UCLSignUpBtnStepDef.i_fill_out_to_create_a_new_account(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see regular sign in page",
  "keyword": "Then "
});
formatter.match({
  "location": "UCLSignUpBtnStepDef.i_see_regular_sign_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can fill out \"betasav2@gmail.com\" , \"Qwe123123\" and log in to account",
  "keyword": "And "
});
formatter.match({
  "location": "UCLSignUpBtnStepDef.i_can_fill_out_and_log_in_to_account(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Already exist credentials login trough sign Up page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@signUp"
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
  "name": "I fill out \"betasav1@gmail.com\" , \"Qwe123123\" , \"22304\" to create a new account",
  "keyword": "And "
});
formatter.match({
  "location": "UCLSignUpBtnStepDef.i_fill_out_to_create_a_new_account(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see regular sign in page",
  "keyword": "Then "
});
formatter.match({
  "location": "UCLSignUpBtnStepDef.i_see_regular_sign_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can fill out \"betasav1@gmail.com\" , \"Qwe123123\" and log in to account",
  "keyword": "And "
});
formatter.match({
  "location": "UCLSignUpBtnStepDef.i_can_fill_out_and_log_in_to_account(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
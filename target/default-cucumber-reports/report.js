<<<<<<< HEAD
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com/carfax/features/saveSearchBtnOnboarding.feature");
formatter.feature({
  "name": "Create account through save this search",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc-3"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@tc-4"
    },
    {
      "name": "@ff"
    },
    {
      "name": "@save"
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
  "name": "I click on Body Type or Price filter",
  "keyword": "And "
});
formatter.step({
  "name": "I fill out \"\u003cbody type\u003e\" , \"\u003cprice range\u003e\"  , \"\u003czipcode\u003e\" of the car I want to search",
  "keyword": "When "
});
formatter.step({
  "name": "I click on next and show me results button from Body type side",
  "keyword": "And "
});
formatter.step({
  "name": "I can see that Save Search button is not able to click",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "body type",
        "price range",
        "zipcode"
      ]
    },
    {
      "cells": [
        "Chassis",
        "Less than $5,000",
        "22204"
      ]
    },
    {
      "cells": [
        "Minivan",
        "Less than $15,000",
        "75501"
      ]
    },
    {
      "cells": [
        "Sedan",
        "Less than $5,000",
        "22304"
      ]
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc-3"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@tc-4"
    },
    {
      "name": "@ff"
    },
    {
      "name": "@save"
    }
  ]
});
formatter.before({
  "status": "passed"
});
=======
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
>>>>>>> e3f58060d95adcb7a8e687a3ba7fee7efe4c4746
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
<<<<<<< HEAD
  "name": "I click on Body Type or Price filter",
  "keyword": "And "
});
formatter.match({
  "location": "SaveThisSearchStepDef.i_click_on_Body_Type_or_Price_filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill out \"Chassis\" , \"Less than $5,000\"  , \"22204\" of the car I want to search",
  "keyword": "When "
});
formatter.match({
  "location": "SaveThisSearchStepDef.i_fill_out_of_the_car_I_want_to_search(String,String,String)"
=======
  "name": "I click on Sign Up button from UCL",
  "keyword": "When "
});
formatter.match({
  "location": "UCLSignUpBtnStepDef.i_click_on_Sign_Up_button_from_UCL()"
>>>>>>> e3f58060d95adcb7a8e687a3ba7fee7efe4c4746
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "I click on next and show me results button from Body type side",
  "keyword": "And "
});
formatter.match({
  "location": "SaveThisSearchStepDef.i_click_on_next_and_show_me_results_button_from_Body_type_side()"
=======
  "name": "I fill out \"email\" , \"password\" , \"zipcode\" to create a new account",
  "keyword": "And "
});
formatter.match({
  "location": "UCLSignUpBtnStepDef.i_fill_out_to_create_a_new_account(String,String,String)"
>>>>>>> e3f58060d95adcb7a8e687a3ba7fee7efe4c4746
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "I can see that Save Search button is not able to click",
  "keyword": "Then "
});
formatter.match({
  "location": "SaveThisSearchStepDef.i_can_see_that_Save_Search_button_is_not_able_to_click()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc-3"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@tc-4"
    },
    {
      "name": "@ff"
    },
    {
      "name": "@save"
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
=======
  "name": "I click on Create account button",
  "keyword": "Then "
});
formatter.match({
  "location": "UCLSignUpBtnStepDef.i_click_on_Create_account_button()"
>>>>>>> e3f58060d95adcb7a8e687a3ba7fee7efe4c4746
});
formatter.result({
  "status": "passed"
});
<<<<<<< HEAD
formatter.step({
  "name": "I click on Body Type or Price filter",
  "keyword": "And "
});
formatter.match({
  "location": "SaveThisSearchStepDef.i_click_on_Body_Type_or_Price_filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill out \"Minivan\" , \"Less than $15,000\"  , \"75501\" of the car I want to search",
  "keyword": "When "
});
formatter.match({
  "location": "SaveThisSearchStepDef.i_fill_out_of_the_car_I_want_to_search(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on next and show me results button from Body type side",
  "keyword": "And "
});
formatter.match({
  "location": "SaveThisSearchStepDef.i_click_on_next_and_show_me_results_button_from_Body_type_side()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can see that Save Search button is not able to click",
  "keyword": "Then "
});
formatter.match({
  "location": "SaveThisSearchStepDef.i_can_see_that_Save_Search_button_is_not_able_to_click()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc-3"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@tc-4"
    },
    {
      "name": "@ff"
    },
    {
      "name": "@save"
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
  "name": "I click on Body Type or Price filter",
  "keyword": "And "
});
formatter.match({
  "location": "SaveThisSearchStepDef.i_click_on_Body_Type_or_Price_filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill out \"Sedan\" , \"Less than $5,000\"  , \"22304\" of the car I want to search",
  "keyword": "When "
});
formatter.match({
  "location": "SaveThisSearchStepDef.i_fill_out_of_the_car_I_want_to_search(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on next and show me results button from Body type side",
  "keyword": "And "
});
formatter.match({
  "location": "SaveThisSearchStepDef.i_click_on_next_and_show_me_results_button_from_Body_type_side()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can see that Save Search button is not able to click",
  "keyword": "Then "
});
formatter.match({
  "location": "SaveThisSearchStepDef.i_can_see_that_Save_Search_button_is_not_able_to_click()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
=======
>>>>>>> e3f58060d95adcb7a8e687a3ba7fee7efe4c4746
});
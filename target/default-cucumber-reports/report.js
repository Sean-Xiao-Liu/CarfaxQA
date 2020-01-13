$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com/carfax/features/FollowBtn.feature");
formatter.feature({
  "name": "Create account through Follow button",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Follow button to create account in VDP",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc-1"
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
  "name": "I fill out \"\u003cmake\u003e\" , \"\u003cmodel\u003e\" , \"\u003czipcode\u003e\" of the car that I want to search",
  "keyword": "And "
});
formatter.step({
  "name": "I click on next and show me results button  show me results button",
  "keyword": "When "
});
formatter.step({
  "name": "I click on follow button to follow car",
  "keyword": "And "
});
formatter.step({
  "name": "I can create an account",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "zipcode"
      ]
    },
    {
      "cells": [
        "Audi",
        "Q3",
        "22201"
      ]
    },
    {
      "cells": [
        "Honda",
        "Civic",
        "75501"
      ]
    },
    {
      "cells": [
        "Land Rover",
        "Discovery Sport",
        "22033"
      ]
    },
    {
      "cells": [
        "Toyota",
        "Camry",
        "22304"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Follow button to create account in VDP",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc-1"
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
  "name": "I fill out \"Audi\" , \"Q3\" , \"22201\" of the car that I want to search",
  "keyword": "And "
});
formatter.match({
  "location": "SaveThisSearchStepDef.i_fill_out_of_the_car_that_I_want_to_search(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on next and show me results button  show me results button",
  "keyword": "When "
});
formatter.match({
  "location": "FollowBtnStepDef.i_click_on_next_and_show_me_results_button_show_me_results_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on follow button to follow car",
  "keyword": "And "
});
formatter.match({
  "location": "FollowBtnStepDef.i_click_on_follow_button_to_follow_car()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can create an account",
  "keyword": "Then "
});
formatter.match({
  "location": "FollowBtnStepDef.i_can_create_an_account()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Follow button to create account in VDP",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc-1"
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
  "name": "I fill out \"Honda\" , \"Civic\" , \"75501\" of the car that I want to search",
  "keyword": "And "
});
formatter.match({
  "location": "SaveThisSearchStepDef.i_fill_out_of_the_car_that_I_want_to_search(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on next and show me results button  show me results button",
  "keyword": "When "
});
formatter.match({
  "location": "FollowBtnStepDef.i_click_on_next_and_show_me_results_button_show_me_results_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on follow button to follow car",
  "keyword": "And "
});
formatter.match({
  "location": "FollowBtnStepDef.i_click_on_follow_button_to_follow_car()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can create an account",
  "keyword": "Then "
});
formatter.match({
  "location": "FollowBtnStepDef.i_can_create_an_account()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Follow button to create account in VDP",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc-1"
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
  "name": "I fill out \"Land Rover\" , \"Discovery Sport\" , \"22033\" of the car that I want to search",
  "keyword": "And "
});
formatter.match({
  "location": "SaveThisSearchStepDef.i_fill_out_of_the_car_that_I_want_to_search(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on next and show me results button  show me results button",
  "keyword": "When "
});
formatter.match({
  "location": "FollowBtnStepDef.i_click_on_next_and_show_me_results_button_show_me_results_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on follow button to follow car",
  "keyword": "And "
});
formatter.match({
  "location": "FollowBtnStepDef.i_click_on_follow_button_to_follow_car()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can create an account",
  "keyword": "Then "
});
formatter.match({
  "location": "FollowBtnStepDef.i_can_create_an_account()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Follow button to create account in VDP",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc-1"
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
  "name": "I fill out \"Toyota\" , \"Camry\" , \"22304\" of the car that I want to search",
  "keyword": "And "
});
formatter.match({
  "location": "SaveThisSearchStepDef.i_fill_out_of_the_car_that_I_want_to_search(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on next and show me results button  show me results button",
  "keyword": "When "
});
formatter.match({
  "location": "FollowBtnStepDef.i_click_on_next_and_show_me_results_button_show_me_results_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on follow button to follow car",
  "keyword": "And "
});
formatter.match({
  "location": "FollowBtnStepDef.i_click_on_follow_button_to_follow_car()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can create an account",
  "keyword": "Then "
});
formatter.match({
  "location": "FollowBtnStepDef.i_can_create_an_account()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
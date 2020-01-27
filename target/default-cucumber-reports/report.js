$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com/carfax/features/LeadForm.feature");
formatter.feature({
  "name": "Lead form on VDP",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Positive testing with first name, last name , zip code and phone number presented. NO ERROR MESSAGES SHOWED",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@ldf"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@ldf1"
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
  "name": "I click on next and show me results button",
  "keyword": "When "
});
formatter.step({
  "name": "I click on particular car that I want",
  "keyword": "And "
});
formatter.step({
  "name": "I navigate to Lead Form and fill out First Name, Last Name, \"\u003czip code\u003e\" and Phone number",
  "keyword": "And "
});
formatter.step({
  "name": "I click on Send Message to that dealer",
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
        "zipcode",
        "zip code"
      ]
    },
    {
      "cells": [
        "Hyundai",
        "Sonata",
        "22201",
        "22201"
      ]
    },
    {
      "cells": [
        "Honda",
        "Civic",
        "75501",
        "22204"
      ]
    },
    {
      "cells": [
        "Infiniti",
        "Q50",
        "22033",
        "75501"
      ]
    },
    {
      "cells": [
        "Toyota",
        "Camry",
        "22304",
        "20148"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Positive testing with first name, last name , zip code and phone number presented. NO ERROR MESSAGES SHOWED",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@ldf"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@ldf1"
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
  "name": "I fill out \"Hyundai\" , \"Sonata\" , \"22201\" of the car that I want to search",
  "keyword": "And "
});
formatter.match({
  "location": "SaveThisSearchStepDef.i_fill_out_of_the_car_that_I_want_to_search(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on next and show me results button",
  "keyword": "When "
});
formatter.match({
  "location": "SaveThisSearchStepDef.i_click_on_next_and_show_me_results_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on particular car that I want",
  "keyword": "And "
});
formatter.match({
  "location": "LeadFormStepDef.i_click_on_particular_car_that_I_want()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to Lead Form and fill out First Name, Last Name, \"22201\" and Phone number",
  "keyword": "And "
});
formatter.match({
  "location": "LeadFormStepDef.i_navigate_to_Lead_Form_and_fill_out_First_Name_Last_Name_and_Phone_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Send Message to that dealer",
  "keyword": "Then "
});
formatter.match({
  "location": "LeadFormStepDef.i_click_on_Send_Message_to_that_dealer()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Positive testing with first name, last name , zip code and phone number presented. NO ERROR MESSAGES SHOWED",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@ldf"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@ldf1"
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
  "name": "I click on next and show me results button",
  "keyword": "When "
});
formatter.match({
  "location": "SaveThisSearchStepDef.i_click_on_next_and_show_me_results_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on particular car that I want",
  "keyword": "And "
});
formatter.match({
  "location": "LeadFormStepDef.i_click_on_particular_car_that_I_want()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to Lead Form and fill out First Name, Last Name, \"22204\" and Phone number",
  "keyword": "And "
});
formatter.match({
  "location": "LeadFormStepDef.i_navigate_to_Lead_Form_and_fill_out_First_Name_Last_Name_and_Phone_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Send Message to that dealer",
  "keyword": "Then "
});
formatter.match({
  "location": "LeadFormStepDef.i_click_on_Send_Message_to_that_dealer()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Positive testing with first name, last name , zip code and phone number presented. NO ERROR MESSAGES SHOWED",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@ldf"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@ldf1"
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
  "name": "I fill out \"Infiniti\" , \"Q50\" , \"22033\" of the car that I want to search",
  "keyword": "And "
});
formatter.match({
  "location": "SaveThisSearchStepDef.i_fill_out_of_the_car_that_I_want_to_search(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on next and show me results button",
  "keyword": "When "
});
formatter.match({
  "location": "SaveThisSearchStepDef.i_click_on_next_and_show_me_results_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on particular car that I want",
  "keyword": "And "
});
formatter.match({
  "location": "LeadFormStepDef.i_click_on_particular_car_that_I_want()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to Lead Form and fill out First Name, Last Name, \"75501\" and Phone number",
  "keyword": "And "
});
formatter.match({
  "location": "LeadFormStepDef.i_navigate_to_Lead_Form_and_fill_out_First_Name_Last_Name_and_Phone_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Send Message to that dealer",
  "keyword": "Then "
});
formatter.match({
  "location": "LeadFormStepDef.i_click_on_Send_Message_to_that_dealer()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Positive testing with first name, last name , zip code and phone number presented. NO ERROR MESSAGES SHOWED",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@ldf"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@ldf1"
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
  "name": "I click on next and show me results button",
  "keyword": "When "
});
formatter.match({
  "location": "SaveThisSearchStepDef.i_click_on_next_and_show_me_results_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on particular car that I want",
  "keyword": "And "
});
formatter.match({
  "location": "LeadFormStepDef.i_click_on_particular_car_that_I_want()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to Lead Form and fill out First Name, Last Name, \"20148\" and Phone number",
  "keyword": "And "
});
formatter.match({
  "location": "LeadFormStepDef.i_navigate_to_Lead_Form_and_fill_out_First_Name_Last_Name_and_Phone_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Send Message to that dealer",
  "keyword": "Then "
});
formatter.match({
  "location": "LeadFormStepDef.i_click_on_Send_Message_to_that_dealer()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
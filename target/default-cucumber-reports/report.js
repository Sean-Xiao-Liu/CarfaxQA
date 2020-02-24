$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com/carfax/features/DMSRP.feature");
formatter.feature({
  "name": "DMSRP page through VDP",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "From VDP to DMSRP",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@dInv"
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
  "name": "I click on Dealer Inventory link",
  "keyword": "And "
});
formatter.step({
  "name": "I am able to see DMSRP page",
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
        "Volkswagen",
        "GTI",
        "22201"
      ]
    },
    {
      "cells": [
        "Lexus",
        "GS",
        "20142"
      ]
    },
    {
      "cells": [
        "Toyota",
        "Camry",
        "22033"
      ]
    }
  ]
});
formatter.scenario({
  "name": "From VDP to DMSRP",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@dInv"
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
  "name": "I fill out \"Volkswagen\" , \"GTI\" , \"22201\" of the car that I want to search",
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
  "name": "I click on Dealer Inventory link",
  "keyword": "And "
});
formatter.match({
  "location": "DMSRPStepDef.i_click_on_Dealer_Inventory_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to see DMSRP page",
  "keyword": "Then "
});
formatter.match({
  "location": "DMSRPStepDef.i_am_able_to_see_DMSRP_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "From VDP to DMSRP",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@dInv"
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
  "name": "I fill out \"Lexus\" , \"GS\" , \"20142\" of the car that I want to search",
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
  "name": "I click on Dealer Inventory link",
  "keyword": "And "
});
formatter.match({
  "location": "DMSRPStepDef.i_click_on_Dealer_Inventory_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to see DMSRP page",
  "keyword": "Then "
});
formatter.match({
  "location": "DMSRPStepDef.i_am_able_to_see_DMSRP_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "From VDP to DMSRP",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@dInv"
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
  "name": "I fill out \"Toyota\" , \"Camry\" , \"22033\" of the car that I want to search",
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
  "name": "I click on Dealer Inventory link",
  "keyword": "And "
});
formatter.match({
  "location": "DMSRPStepDef.i_click_on_Dealer_Inventory_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to see DMSRP page",
  "keyword": "Then "
});
formatter.match({
  "location": "DMSRPStepDef.i_am_able_to_see_DMSRP_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
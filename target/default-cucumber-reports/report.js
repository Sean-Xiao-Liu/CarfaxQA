$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com/carfax/features/MapAndDirections.feature");
formatter.feature({
  "name": "Map and Directions page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Map and Directions page from VDP",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@m\u0026d-1"
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
  "name": "I click on map\u0026directions link from dealer info window",
  "keyword": "And "
});
formatter.step({
  "name": "I fill out address , \"\u003cstate\u003e\", \"\u003czip code\u003e\" to get direction",
  "keyword": "And "
});
formatter.step({
  "name": "I see map\u0026directions window",
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
        "zip code",
        "state"
      ]
    },
    {
      "cells": [
        "Audi",
        "Q3",
        "22201",
        "22201",
        "Arizona"
      ]
    },
    {
      "cells": [
        "Honda",
        "Civic",
        "75501",
        "75501",
        "Florida"
      ]
    },
    {
      "cells": [
        "Land Rover",
        "Discovery Sport",
        "22033",
        "22033",
        "Georgia"
      ]
    },
    {
      "cells": [
        "Toyota",
        "Camry",
        "22304",
        "22304",
        "Missouri"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Map and Directions page from VDP",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@m\u0026d-1"
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
  "name": "I click on map\u0026directions link from dealer info window",
  "keyword": "And "
});
formatter.match({
  "location": "MapAndDirectionsStepDef.i_click_on_map_directions_link_from_dealer_info_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill out address , \"Arizona\", \"22201\" to get direction",
  "keyword": "And "
});
formatter.match({
  "location": "MapAndDirectionsStepDef.i_fill_out_address_to_get_direction(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see map\u0026directions window",
  "keyword": "Then "
});
formatter.match({
  "location": "MapAndDirectionsStepDef.i_see_map_directions_window()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Map and Directions page from VDP",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@m\u0026d-1"
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
  "name": "I click on map\u0026directions link from dealer info window",
  "keyword": "And "
});
formatter.match({
  "location": "MapAndDirectionsStepDef.i_click_on_map_directions_link_from_dealer_info_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill out address , \"Florida\", \"75501\" to get direction",
  "keyword": "And "
});
formatter.match({
  "location": "MapAndDirectionsStepDef.i_fill_out_address_to_get_direction(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see map\u0026directions window",
  "keyword": "Then "
});
formatter.match({
  "location": "MapAndDirectionsStepDef.i_see_map_directions_window()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Map and Directions page from VDP",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@m\u0026d-1"
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
  "name": "I click on map\u0026directions link from dealer info window",
  "keyword": "And "
});
formatter.match({
  "location": "MapAndDirectionsStepDef.i_click_on_map_directions_link_from_dealer_info_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill out address , \"Georgia\", \"22033\" to get direction",
  "keyword": "And "
});
formatter.match({
  "location": "MapAndDirectionsStepDef.i_fill_out_address_to_get_direction(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see map\u0026directions window",
  "keyword": "Then "
});
formatter.match({
  "location": "MapAndDirectionsStepDef.i_see_map_directions_window()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Map and Directions page from VDP",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@m\u0026d-1"
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
  "name": "I click on map\u0026directions link from dealer info window",
  "keyword": "And "
});
formatter.match({
  "location": "MapAndDirectionsStepDef.i_click_on_map_directions_link_from_dealer_info_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill out address , \"Missouri\", \"22304\" to get direction",
  "keyword": "And "
});
formatter.match({
  "location": "MapAndDirectionsStepDef.i_fill_out_address_to_get_direction(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see map\u0026directions window",
  "keyword": "Then "
});
formatter.match({
  "location": "MapAndDirectionsStepDef.i_see_map_directions_window()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
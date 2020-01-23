<<<<<<< HEAD
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com/carfax/features/MapAndDirections.feature");
=======
<<<<<<< HEAD
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com/carfax/features/saveSearchBtnOnboarding.feature");
>>>>>>> ucl-jenkins
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
    },
    {
      "name": "@smoke"
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
        "85006",
        "Arizona"
      ]
    },
    {
      "cells": [
        "Honda",
        "Civic",
        "75501",
        "32003",
        "Florida"
      ]
    },
    {
      "cells": [
        "Land Rover",
        "Discovery Sport",
        "22033",
        "30002",
        "Georgia"
      ]
    },
    {
      "cells": [
        "Toyota",
        "Camry",
        "22304",
        "63101",
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
    },
    {
      "name": "@smoke"
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
  "name": "I fill out \"Audi\" , \"Q3\" , \"22201\" of the car that I want to search",
=======
<<<<<<< HEAD
  "name": "I click on Body Type or Price filter",
>>>>>>> ucl-jenkins
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
<<<<<<< HEAD
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
=======
  "location": "SaveThisSearchStepDef.i_fill_out_of_the_car_I_want_to_search(String,String,String)"
=======
  "name": "I click on Sign Up button from UCL",
  "keyword": "When "
});
formatter.match({
  "location": "UCLSignUpBtnStepDef.i_click_on_Sign_Up_button_from_UCL()"
>>>>>>> e3f58060d95adcb7a8e687a3ba7fee7efe4c4746
>>>>>>> ucl-jenkins
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "I click on map\u0026directions link from dealer info window",
  "keyword": "And "
});
formatter.match({
  "location": "MapAndDirectionsStepDef.i_click_on_map_directions_link_from_dealer_info_window()"
=======
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
>>>>>>> ucl-jenkins
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "I fill out address , \"Arizona\", \"85006\" to get direction",
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
=======
<<<<<<< HEAD
  "name": "I can see that Save Search button is not able to click",
>>>>>>> ucl-jenkins
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
    },
    {
      "name": "@smoke"
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
  "name": "I fill out address , \"Florida\", \"32003\" to get direction",
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
    },
    {
      "name": "@smoke"
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
  "name": "I fill out address , \"Georgia\", \"30002\" to get direction",
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
    },
    {
      "name": "@smoke"
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
  "name": "I fill out address , \"Missouri\", \"63101\" to get direction",
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
=======
>>>>>>> e3f58060d95adcb7a8e687a3ba7fee7efe4c4746
});
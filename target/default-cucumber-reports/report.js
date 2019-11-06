$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com/carfax/features/FindDealer.feature");
formatter.feature({
  "name": "Find Dealer",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Find dealer through UCL",
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
  "name": "I click on Find a Dealer button",
  "keyword": "When "
});
formatter.match({
  "location": "FindDealerStepDef.i_click_on_Find_a_Dealer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I choose a car , radius and zipcode to find a dealer and click submit",
  "keyword": "Then "
});
formatter.match({
  "location": "FindDealerStepDef.i_choose_a_car_radius_and_zipcode_to_find_a_dealer_and_click_submit()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Dealer list",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "I am able to see dealer list",
  "keyword": "Given "
});
formatter.match({
  "location": "FindDealerStepDef.i_am_able_to_see_dealer_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on any dealer page that I want",
  "keyword": "When "
});
formatter.match({
  "location": "FindDealerStepDef.i_click_on_any_dealer_page_that_I_want()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I able to see cars from specific dealer",
  "keyword": "Then "
});
formatter.match({
  "location": "FindDealerStepDef.i_able_to_see_cars_from_specific_dealer()"
});
formatter.result({
  "status": "passed"
});
});
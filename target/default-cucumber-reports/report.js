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
      "name": "@tc-2"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@ff"
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
formatter.step({
  "name": "I am able to see dealer list",
  "keyword": "Given "
});
formatter.match({
  "location": "FindDealerStepDef.i_am_able_to_see_dealer_list()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"div[class\u003d\u0027results-header-title\u0027]\"}\n  (Session info: chrome\u003d79.0.3945.130)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027A-XF4WBHV29\u0027, ip: \u0027fe80:0:0:0:1c06:ed29:72ac:25c5%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.2\u0027, java.version: \u002712.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.130, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: /var/folders/x_/jgrkcbmn19s...}, goog:chromeOptions: {debuggerAddress: localhost:58886}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 572cd6b079fd0664a2ca250514a3ea63\n*** Element info: {Using\u003dcss selector, value\u003ddiv[class\u003d\u0027results-header-title\u0027]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy20.isDisplayed(Unknown Source)\n\tat com.carfax_ucl.step_definitions.FindDealerStepDef.i_am_able_to_see_dealer_list(FindDealerStepDef.java:56)\n\tat ✽.I am able to see dealer list(file:src/test/resources/com/carfax/features/FindDealer.feature:13)\n",
  "status": "failed"
});
formatter.step({
  "name": "I click on any dealer page that I want",
  "keyword": "When "
});
formatter.match({
  "location": "FindDealerStepDef.i_click_on_any_dealer_page_that_I_want()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I able to see cars from specific dealer",
  "keyword": "Then "
});
formatter.match({
  "location": "FindDealerStepDef.i_able_to_see_cars_from_specific_dealer()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/com/carfax/features/FollowBtnOnboarding.feature");
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
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@ff"
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
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@ff"
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
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@ff"
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
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@ff"
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
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@ff"
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
formatter.uri("file:src/test/resources/com/carfax/features/LeadForm.feature");
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
      "name": "@ldf1"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@lPN"
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
      "name": "@ldf1"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@lPN"
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
      "name": "@ldf1"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@lPN"
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
      "name": "@ldf1"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@lPN"
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
      "name": "@ldf1"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@lPN"
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
formatter.scenarioOutline({
  "name": "Lead form with first name, last name, zip code and email",
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
      "name": "@ldf1"
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
  "name": "I navigate to Lead Form and fill out First Name, Last Name, \"\u003czip code\u003e\" , email",
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
  "name": "Lead form with first name, last name, zip code and email",
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
      "name": "@ldf1"
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
  "name": "I navigate to Lead Form and fill out First Name, Last Name, \"22201\" , email",
  "keyword": "And "
});
formatter.match({
  "location": "LeadFormStepDef.i_navigate_to_Lead_Form_and_fill_out_First_Name_Last_Name_email(String)"
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
  "name": "Lead form with first name, last name, zip code and email",
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
      "name": "@ldf1"
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
  "name": "I navigate to Lead Form and fill out First Name, Last Name, \"22204\" , email",
  "keyword": "And "
});
formatter.match({
  "location": "LeadFormStepDef.i_navigate_to_Lead_Form_and_fill_out_First_Name_Last_Name_email(String)"
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
  "name": "Lead form with first name, last name, zip code and email",
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
      "name": "@ldf1"
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
  "name": "I navigate to Lead Form and fill out First Name, Last Name, \"75501\" , email",
  "keyword": "And "
});
formatter.match({
  "location": "LeadFormStepDef.i_navigate_to_Lead_Form_and_fill_out_First_Name_Last_Name_email(String)"
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
  "name": "Lead form with first name, last name, zip code and email",
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
      "name": "@ldf1"
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
  "name": "I navigate to Lead Form and fill out First Name, Last Name, \"20148\" , email",
  "keyword": "And "
});
formatter.match({
  "location": "LeadFormStepDef.i_navigate_to_Lead_Form_and_fill_out_First_Name_Last_Name_email(String)"
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
formatter.scenarioOutline({
  "name": "Negative scenario where none of the fields are filled out",
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
  "name": "I navigate to Lead Form and cleaning zipcode which is by default already filled out",
  "keyword": "And "
});
formatter.step({
  "name": "I click on Send Message to that dealer and should see error messages are displayed",
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
        "Hyundai",
        "Sonata",
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
        "Infiniti",
        "Q50",
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
  "name": "Negative scenario where none of the fields are filled out",
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
  "name": "I navigate to Lead Form and cleaning zipcode which is by default already filled out",
  "keyword": "And "
});
formatter.match({
  "location": "LeadFormStepDef.i_navigate_to_Lead_Form_and_cleaning_zipcode_which_is_by_default_already_filled_out()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Send Message to that dealer and should see error messages are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LeadFormStepDef.i_click_on_Send_Message_to_that_dealer_and_should_see_error_messages_are_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Negative scenario where none of the fields are filled out",
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
  "name": "I navigate to Lead Form and cleaning zipcode which is by default already filled out",
  "keyword": "And "
});
formatter.match({
  "location": "LeadFormStepDef.i_navigate_to_Lead_Form_and_cleaning_zipcode_which_is_by_default_already_filled_out()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Send Message to that dealer and should see error messages are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LeadFormStepDef.i_click_on_Send_Message_to_that_dealer_and_should_see_error_messages_are_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Negative scenario where none of the fields are filled out",
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
  "name": "I navigate to Lead Form and cleaning zipcode which is by default already filled out",
  "keyword": "And "
});
formatter.match({
  "location": "LeadFormStepDef.i_navigate_to_Lead_Form_and_cleaning_zipcode_which_is_by_default_already_filled_out()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Send Message to that dealer and should see error messages are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LeadFormStepDef.i_click_on_Send_Message_to_that_dealer_and_should_see_error_messages_are_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Negative scenario where none of the fields are filled out",
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
  "name": "I navigate to Lead Form and cleaning zipcode which is by default already filled out",
  "keyword": "And "
});
formatter.match({
  "location": "LeadFormStepDef.i_navigate_to_Lead_Form_and_cleaning_zipcode_which_is_by_default_already_filled_out()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Send Message to that dealer and should see error messages are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LeadFormStepDef.i_click_on_Send_Message_to_that_dealer_and_should_see_error_messages_are_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Error message for \u0027Last name is required\u0027 is displayed",
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
      "name": "@rerunLGF"
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
  "name": "I navigate to Lead Form and fill out First Name,  \"\u003czip code\u003e\" and Phone number",
  "keyword": "And "
});
formatter.step({
  "name": "I click on Send Message to that dealer and should see Last Name error message are displayed",
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
        "22204"
      ]
    },
    {
      "cells": [
        "Honda",
        "Civic",
        "75501",
        "20148"
      ]
    },
    {
      "cells": [
        "Infiniti",
        "Q50",
        "22033",
        "20142"
      ]
    },
    {
      "cells": [
        "Toyota",
        "Camry",
        "22304",
        "22304"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Error message for \u0027Last name is required\u0027 is displayed",
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
      "name": "@rerunLGF"
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
  "name": "I navigate to Lead Form and fill out First Name,  \"22204\" and Phone number",
  "keyword": "And "
});
formatter.match({
  "location": "LeadFormStepDef.i_navigate_to_Lead_Form_and_fill_out_First_Name_and_Phone_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Send Message to that dealer and should see Last Name error message are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LeadFormStepDef.i_click_on_Send_Message_to_that_dealer_and_should_see_Last_Name_error_message_are_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Error message for \u0027Last name is required\u0027 is displayed",
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
      "name": "@rerunLGF"
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
  "name": "I navigate to Lead Form and fill out First Name,  \"20148\" and Phone number",
  "keyword": "And "
});
formatter.match({
  "location": "LeadFormStepDef.i_navigate_to_Lead_Form_and_fill_out_First_Name_and_Phone_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Send Message to that dealer and should see Last Name error message are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LeadFormStepDef.i_click_on_Send_Message_to_that_dealer_and_should_see_Last_Name_error_message_are_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Error message for \u0027Last name is required\u0027 is displayed",
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
      "name": "@rerunLGF"
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
  "name": "I navigate to Lead Form and fill out First Name,  \"20142\" and Phone number",
  "keyword": "And "
});
formatter.match({
  "location": "LeadFormStepDef.i_navigate_to_Lead_Form_and_fill_out_First_Name_and_Phone_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Send Message to that dealer and should see Last Name error message are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LeadFormStepDef.i_click_on_Send_Message_to_that_dealer_and_should_see_Last_Name_error_message_are_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Error message for \u0027Last name is required\u0027 is displayed",
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
      "name": "@rerunLGF"
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
  "name": "I navigate to Lead Form and fill out First Name,  \"22304\" and Phone number",
  "keyword": "And "
});
formatter.match({
  "location": "LeadFormStepDef.i_navigate_to_Lead_Form_and_fill_out_First_Name_and_Phone_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Send Message to that dealer and should see Last Name error message are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LeadFormStepDef.i_click_on_Send_Message_to_that_dealer_and_should_see_Last_Name_error_message_are_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Error message for \u0027First name is required\u0027 is displayed",
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
  "name": "I navigate to Lead Form and fill out Last Name,  \"\u003czip code\u003e\" and Phone number",
  "keyword": "And "
});
formatter.step({
  "name": "I click on Send Message to that dealer and should see First Name error message are displayed",
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
        "22304"
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
        "22201"
      ]
    },
    {
      "cells": [
        "Toyota",
        "Camry",
        "22304",
        "75501"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Error message for \u0027First name is required\u0027 is displayed",
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
  "name": "I navigate to Lead Form and fill out Last Name,  \"22304\" and Phone number",
  "keyword": "And "
});
formatter.match({
  "location": "LeadFormStepDef.i_navigate_to_Lead_Form_and_fill_out_Last_Name_and_Phone_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Send Message to that dealer and should see First Name error message are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LeadFormStepDef.i_click_on_Send_Message_to_that_dealer_and_should_see_First_Name_error_message_are_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Error message for \u0027First name is required\u0027 is displayed",
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
  "name": "I navigate to Lead Form and fill out Last Name,  \"22204\" and Phone number",
  "keyword": "And "
});
formatter.match({
  "location": "LeadFormStepDef.i_navigate_to_Lead_Form_and_fill_out_Last_Name_and_Phone_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Send Message to that dealer and should see First Name error message are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LeadFormStepDef.i_click_on_Send_Message_to_that_dealer_and_should_see_First_Name_error_message_are_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Error message for \u0027First name is required\u0027 is displayed",
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
  "name": "I navigate to Lead Form and fill out Last Name,  \"22201\" and Phone number",
  "keyword": "And "
});
formatter.match({
  "location": "LeadFormStepDef.i_navigate_to_Lead_Form_and_fill_out_Last_Name_and_Phone_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Send Message to that dealer and should see First Name error message are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LeadFormStepDef.i_click_on_Send_Message_to_that_dealer_and_should_see_First_Name_error_message_are_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Error message for \u0027First name is required\u0027 is displayed",
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
  "name": "I navigate to Lead Form and fill out Last Name,  \"75501\" and Phone number",
  "keyword": "And "
});
formatter.match({
  "location": "LeadFormStepDef.i_navigate_to_Lead_Form_and_fill_out_Last_Name_and_Phone_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Send Message to that dealer and should see First Name error message are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LeadFormStepDef.i_click_on_Send_Message_to_that_dealer_and_should_see_First_Name_error_message_are_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Error message for \u0027Zip Code name is required\u0027 is displayed",
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
  "name": "I navigate to Lead Form and fill out First Name,  Last name and Phone number",
  "keyword": "And "
});
formatter.step({
  "name": "I click on Send Message to that dealer and should see Zip code error message are displayed",
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
        "Hyundai",
        "Sonata",
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
        "Infiniti",
        "Q50",
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
  "name": "Error message for \u0027Zip Code name is required\u0027 is displayed",
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
  "name": "I navigate to Lead Form and fill out First Name,  Last name and Phone number",
  "keyword": "And "
});
formatter.match({
  "location": "LeadFormStepDef.i_navigate_to_Lead_Form_and_fill_out_First_Name_Last_name_and_Phone_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Send Message to that dealer and should see Zip code error message are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LeadFormStepDef.i_click_on_Send_Message_to_that_dealer_and_should_see_Zip_code_error_message_are_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Error message for \u0027Zip Code name is required\u0027 is displayed",
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
  "name": "I navigate to Lead Form and fill out First Name,  Last name and Phone number",
  "keyword": "And "
});
formatter.match({
  "location": "LeadFormStepDef.i_navigate_to_Lead_Form_and_fill_out_First_Name_Last_name_and_Phone_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Send Message to that dealer and should see Zip code error message are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LeadFormStepDef.i_click_on_Send_Message_to_that_dealer_and_should_see_Zip_code_error_message_are_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Error message for \u0027Zip Code name is required\u0027 is displayed",
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
  "name": "I navigate to Lead Form and fill out First Name,  Last name and Phone number",
  "keyword": "And "
});
formatter.match({
  "location": "LeadFormStepDef.i_navigate_to_Lead_Form_and_fill_out_First_Name_Last_name_and_Phone_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Send Message to that dealer and should see Zip code error message are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LeadFormStepDef.i_click_on_Send_Message_to_that_dealer_and_should_see_Zip_code_error_message_are_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Error message for \u0027Zip Code name is required\u0027 is displayed",
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
  "name": "I navigate to Lead Form and fill out First Name,  Last name and Phone number",
  "keyword": "And "
});
formatter.match({
  "location": "LeadFormStepDef.i_navigate_to_Lead_Form_and_fill_out_First_Name_Last_name_and_Phone_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Send Message to that dealer and should see Zip code error message are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LeadFormStepDef.i_click_on_Send_Message_to_that_dealer_and_should_see_Zip_code_error_message_are_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/com/carfax/features/MainSignUp.feature");
formatter.feature({
  "name": "Create account",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Create account through main Sign Up button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sign-1"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@ff"
    },
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
  "name": "I click on Sign Up button",
  "keyword": "When "
});
formatter.match({
  "location": "MainSignUpBtnStepDef.i_click_on_Sign_Up_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can fill out \"email\" , \"password\"",
  "keyword": "And "
});
formatter.match({
  "location": "MainSignUpBtnStepDef.i_can_fill_out(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Sign Up button to complete request",
  "keyword": "Then "
});
formatter.match({
  "location": "MainSignUpBtnStepDef.i_click_on_Sign_Up_button_to_complete_request()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/com/carfax/features/MapAndDirections.feature");
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
formatter.uri("file:src/test/resources/com/carfax/features/UCLSignInBtn.feature");
formatter.feature({
  "name": "Forgot Password and Create account trough Sign in feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Create account through SignIn option",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sign-1"
    },
    {
      "name": "@rerun"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@ff"
    },
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
  "name": "I click on Create account option",
  "keyword": "Then "
});
formatter.match({
  "location": "UCLSignInStepDef.i_click_on_Create_account_option()"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Forgot password through SignIn option",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sign-1"
    },
    {
      "name": "@rerun"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@ff"
    },
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
formatter.uri("file:src/test/resources/com/carfax/features/UCLSignUpBtn.feature");
formatter.feature({
  "name": "Create account",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Create account through UCL page with new credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sign-1"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@ff"
    },
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
  "name": "I click on Sign Up button from UCL",
  "keyword": "When "
});
formatter.step({
  "name": "I fill out email , password , \"\u003czipcode\u003e\" to create a new account",
  "keyword": "And "
});
formatter.step({
  "name": "I click on Create account button",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "zipcode"
      ]
    },
    {
      "cells": [
        "22201"
      ]
    },
    {
      "cells": [
        "20142"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Create account through UCL page with new credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sign-1"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@ff"
    },
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
  "name": "I fill out email , password , \"22201\" to create a new account",
  "keyword": "And "
});
formatter.match({
  "location": "UCLSignUpBtnStepDef.i_fill_out_email_password_to_create_a_new_account(String)"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Create account through UCL page with new credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sign-1"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@ff"
    },
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
  "name": "I fill out email , password , \"20142\" to create a new account",
  "keyword": "And "
});
formatter.match({
  "location": "UCLSignUpBtnStepDef.i_fill_out_email_password_to_create_a_new_account(String)"
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
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Already exist credentials login trough sign Up page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@signUp"
    },
    {
      "name": "@smoke"
    },
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
    },
    {
      "name": "@smoke"
    },
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
    },
    {
      "name": "@smoke"
    },
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
    },
    {
      "name": "@smoke"
    },
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
formatter.uri("file:src/test/resources/com/carfax/features/saveSearchBtnOnboarding.feature");
formatter.feature({
  "name": "Create account through save this search",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Create account through Save This Search option",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@ff"
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
  "name": "I click on  Save This Search button",
  "keyword": "And "
});
formatter.step({
  "name": "I am able to fill out email , zip code and click on save This Search button",
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
        "Subaru",
        "Ascent",
        "22201"
      ]
    },
    {
      "cells": [
        "BMW",
        "2 Series",
        "75501"
      ]
    },
    {
      "cells": [
        "Tesla",
        "Model 3",
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
  "name": "Create account through Save This Search option",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@ff"
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
  "name": "I fill out \"Subaru\" , \"Ascent\" , \"22201\" of the car that I want to search",
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
  "name": "I click on  Save This Search button",
  "keyword": "And "
});
formatter.match({
  "location": "SaveThisSearchStepDef.i_click_on_Save_This_Search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to fill out email , zip code and click on save This Search button",
  "keyword": "Then "
});
formatter.match({
  "location": "SaveThisSearchStepDef.i_am_able_to_fill_out_email_zip_code_and_click_on_save_This_Search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Create account through Save This Search option",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@ff"
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
  "name": "I fill out \"BMW\" , \"2 Series\" , \"75501\" of the car that I want to search",
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
  "name": "I click on  Save This Search button",
  "keyword": "And "
});
formatter.match({
  "location": "SaveThisSearchStepDef.i_click_on_Save_This_Search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to fill out email , zip code and click on save This Search button",
  "keyword": "Then "
});
formatter.match({
  "location": "SaveThisSearchStepDef.i_am_able_to_fill_out_email_zip_code_and_click_on_save_This_Search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Create account through Save This Search option",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@ff"
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
  "name": "I fill out \"Tesla\" , \"Model 3\" , \"22033\" of the car that I want to search",
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
  "name": "I click on  Save This Search button",
  "keyword": "And "
});
formatter.match({
  "location": "SaveThisSearchStepDef.i_click_on_Save_This_Search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to fill out email , zip code and click on save This Search button",
  "keyword": "Then "
});
formatter.match({
  "location": "SaveThisSearchStepDef.i_am_able_to_fill_out_email_zip_code_and_click_on_save_This_Search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Create account through Save This Search option",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@ff"
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
  "name": "I click on  Save This Search button",
  "keyword": "And "
});
formatter.match({
  "location": "SaveThisSearchStepDef.i_click_on_Save_This_Search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to fill out email , zip code and click on save This Search button",
  "keyword": "Then "
});
formatter.match({
  "location": "SaveThisSearchStepDef.i_am_able_to_fill_out_email_zip_code_and_click_on_save_This_Search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Save Search button is not enable if you pick only Make",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@tc-3"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@ff"
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
  "name": "I fill out \"\u003cmake\u003e\" ,  \"\u003czipcode\u003e\" of the car that I want to search",
  "keyword": "And "
});
formatter.step({
  "name": "I click on next and show me results button",
  "keyword": "When "
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
        "make",
        "zipcode"
      ]
    },
    {
      "cells": [
        "Subaru",
        "22201"
      ]
    },
    {
      "cells": [
        "BMW",
        "22304"
      ]
    },
    {
      "cells": [
        "Audi",
        "75501"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Save Search button is not enable if you pick only Make",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@tc-3"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@ff"
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
  "name": "I fill out \"Subaru\" ,  \"22201\" of the car that I want to search",
  "keyword": "And "
});
formatter.match({
  "location": "SaveThisSearchStepDef.i_fill_out_of_the_car_that_I_want_to_search(String,String)"
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
  "name": "Save Search button is not enable if you pick only Make",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@tc-3"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@ff"
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
  "name": "I fill out \"BMW\" ,  \"22304\" of the car that I want to search",
  "keyword": "And "
});
formatter.match({
  "location": "SaveThisSearchStepDef.i_fill_out_of_the_car_that_I_want_to_search(String,String)"
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
  "name": "Save Search button is not enable if you pick only Make",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@tc-3"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@ff"
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
  "name": "I fill out \"Audi\" ,  \"75501\" of the car that I want to search",
  "keyword": "And "
});
formatter.match({
  "location": "SaveThisSearchStepDef.i_fill_out_of_the_car_that_I_want_to_search(String,String)"
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
formatter.scenarioOutline({
  "name": "Save Search through Body type and Price range. Save Search button is not available",
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
  "name": "Save Search through Body type and Price range. Save Search button is not available",
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
  "name": "I fill out \"Chassis\" , \"Less than $5,000\"  , \"22204\" of the car I want to search",
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
  "name": "Save Search through Body type and Price range. Save Search button is not available",
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
  "name": "Save Search through Body type and Price range. Save Search button is not available",
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
});
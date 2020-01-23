Feature: Find Dealer


<<<<<<< HEAD



 @tc-2 @smoke @ff
 Scenario: Find dealer through UCL
=======
  Scenario: Find dealer through UCL

>>>>>>> e3f58060d95adcb7a8e687a3ba7fee7efe4c4746
    Given I am on main Carfax page
    And I navigate to Find a Used Car page
    When I click on Find a Dealer button
    Then I choose a car , radius and zipcode to find a dealer and click submit
<<<<<<< HEAD
    Given I am able to see dealer list
    When I click on any dealer page that I want
    Then I able to see cars from specific dealer
=======

  Scenario: Dealer list
      Given I am able to see dealer list
      When I click on any dealer page that I want
      Then I able to see cars from specific dealer


>>>>>>> e3f58060d95adcb7a8e687a3ba7fee7efe4c4746

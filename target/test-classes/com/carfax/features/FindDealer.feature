Feature: Find Dealer





 @tc-2
 Scenario: Find dealer through UCL
    Given I am on main Carfax page
    And I navigate to Find a Used Car page
    When I click on Find a Dealer button
    Then I choose a car , radius and zipcode to find a dealer and click submit
    Given I am able to see dealer list
    When I click on any dealer page that I want
    Then I able to see cars from specific dealer
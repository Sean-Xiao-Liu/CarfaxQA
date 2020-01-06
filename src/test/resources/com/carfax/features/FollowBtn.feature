Feature: Create account through Follow button

@smoke
  Scenario: Follow button to create account in VDP
    Given I am on main Carfax page
    And I navigate to Find a Used Car page
    And I fill out "make" , "model" , "zipcode" of the car that I want to search
    When I click on next and show me results button  show me results button
    And I click on follow button to follow car
    Then I can create an account

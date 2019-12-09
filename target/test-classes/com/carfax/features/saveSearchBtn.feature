Feature: Create account through save this search
  @smoke

  Scenario: Create account through Save This Search option
    Given I am on main Carfax page
    And I navigate to Find a Used Car page
    And I fill out "make" , "model" , "zip code" of the car that I want to search
    When I click on next and show me results button
    And I click on  Save This Search button
    Then I am able to fill out "email" , "zip code" and click on save This Search button
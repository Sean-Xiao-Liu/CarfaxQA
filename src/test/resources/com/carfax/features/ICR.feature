Feature: ICR on VDP

  @icr  @smoke
  Scenario Outline: Create account through Save This Search option
    Given I am on main Carfax page
    And I navigate to Find a Used Car page
    And I fill out "<make>" , "<model>" , "<zipcode>" of the car that I want to search
    When I click on next and show me results button
    And I click on particular car that I want
    Then I click on View Free Carfax Report


    Examples:
      | make   | model    | zipcode |
      | Subaru | Ascent   | 22201   |
      | BMW    | 2 Series | 75501   |
      | Tesla  | Model 3  | 22033   |
      | Toyota | Camry    | 22304   |
Feature: Lead From links

  @leadLinks
  Scenario Outline: Privacy Policy link on Lead From
    Given I am on main Carfax page
    And I navigate to Find a Used Car page
    And I fill out "<make>" , "<model>" , "<zipcode>" of the car that I want to search
    When I click on next and show me results button
    And I click on particular car that I want
    Then I click on Privacy Policy and navigate to the page

    Examples:
      | make     | model  | zipcode |
      | Hyundai  | Sonata | 22201   |
      | Honda    | Civic  | 75501   |


  @leadLinks
  Scenario Outline: Terms of Use on Lead Form
    Given I am on main Carfax page
    And I navigate to Find a Used Car page
    And I fill out "<make>" , "<model>" , "<zipcode>" of the car that I want to search
    When I click on next and show me results button
    And I click on particular car that I want
    Then I click on Terms of Use and navigate to the page

    Examples:
      | make     | model  | zipcode |
      | Audi  | Sonata | 22201   |
      | Honda    | Accord  | 20142   |



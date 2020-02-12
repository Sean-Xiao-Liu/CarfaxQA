Feature: Testing a check boxes on SPR and verifying car title



  @filters
  Scenario Outline: Filters on SRP
    Given I am on main Carfax page
    And I navigate to Find a Used Car page
    And I fill out "<make>" , "<model>" , "<zipcode>" of the car that I want to search
    When I click on next and show me results button
    And I choose pillars, "<min year>","<max year>" and trim
    Then I can verify that filters are displayed


    Examples:
      | make | model | zipcode | min year |max year|
      | Audi | Q3    | 22201   | 2006 |2019    |
      | Audi | A3    | 75501   | 2011 |2019    |
      | BMW | 2 Series    | 22304   | 2013 |2019    |








Feature: DMSRP page through VDP






  @dInv @smoke
  Scenario Outline: From VDP to DMSRP

    Given I am on main Carfax page
    And I navigate to Find a Used Car page
    And I fill out "<make>" , "<model>" , "<zipcode>" of the car that I want to search
    When I click on next and show me results button
    And I click on particular car that I want
    And I click on Dealer Inventory link
    Then I am able to see DMSRP page

  Examples:
  | make   | model    | zipcode |
  | Volkswagen | GTI   | 22201   |
  | Lexus    | GS | 20142   |
  | Toyota  |  Camry  | 22033   |




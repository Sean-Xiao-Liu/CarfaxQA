Feature: Dealer Info





@dWeb
  Scenario Outline: Dealer Website through Dealer Info

    Given I am on main Carfax page
    And I navigate to Find a Used Car page
    And I fill out "<make>" , "<model>" , "<zipcode>" of the car that I want to search
    When I click on next and show me results button
    And I click on particular car that I want
   Then I click on Dealer Website and I navigate to website


    Examples:
      | make     | model  | zipcode |
      | Kia  | Cadenza | 22201   |
      | Subaru    | Ascent  | 75501   |


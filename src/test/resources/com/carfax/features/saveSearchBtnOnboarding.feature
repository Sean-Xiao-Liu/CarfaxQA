Feature: Create account through save this search



  @regression
  Scenario Outline: Create account through Save This Search option
    Given I am on main Carfax page
    And I navigate to Find a Used Car page
    And I fill out "<make>" , "<model>" , "<zipcode>" of the car that I want to search
    When I click on next and show me results button
    And I click on  Save This Search button
    Then I am able to fill out email , zip code and click on save This Search button

    Examples:
      | make       | model           | zipcode |
      | Subaru       |  Ascent             | 22201   |
      | BMW        | 2 Series        | 75501   |
      | Tesla | Model 3 | 22033   |
      | Toyota     | Camry           | 22304   |


    Scenario Outline: Save Search button is not enable if you pick only Make

      Given I am on main Carfax page
      And I navigate to Find a Used Car page
      And I fill out "<make>" ,  "<zipcode>" of the car that I want to search
      When I click on next and show me results button
      Then I can see that Save Search button is not able to click

      Examples:
      |make|zipcode|
      |Subaru   |22201       |
      |BMW    |22304       |
      |Audi    |75501       |

@tc-2
    Scenario Outline:
      Given I am on main Carfax page
      And I navigate to Find a Used Car page
      And I click on Body Type or Price filter
      When I fill out "<body type>" , "<price range>"  , "<zipcode>" of the car I want to search
      And I click on next and show me results button from Body type side
      Then I can see that Save Search button is not able to click

      Examples:
      |body type|price range|zipcode|
      |Chassis        |Less than $5,000           |22204       |
      |Minivan        |Less than $15,000           |75501       |
      |Sedan        |Less than $5,000           |22304       |




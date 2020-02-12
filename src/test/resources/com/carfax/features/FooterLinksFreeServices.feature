Feature:Footer links for Free Services
  @frs
  Scenario: myCarfax footer link

    Given I am on main Carfax page
    And I navigate to Find a Used Car page
    And I scroll down to footer links
    When I click on myCarfax link
    Then It navigates me to the My Car Maintenance page
  @frs
  Scenario: Resources footer link

    Given I am on main Carfax page
    And I navigate to Find a Used Car page
    And I scroll down to footer links

    When I click on Resources link
    Then It navigates me to the Press page
  @frs
  Scenario: Recalls footer link

    Given I am on main Carfax page
    And I navigate to Find a Used Car page
    And I scroll down to footer links
    When I click on Recalls link
    Then It navigates me to the Vehicle Recall Check page
  @frs
  Scenario: Sample Report footer link
    Given I am on main Carfax page
    And I navigate to Find a Used Car page
    And I scroll down to footer links
    When I click on Sample Report link
    Then It navigates me to the View Sample CARFAX Reports page



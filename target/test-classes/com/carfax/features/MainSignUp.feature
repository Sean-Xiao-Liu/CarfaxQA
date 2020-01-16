Feature: Create account


  @sign-1 @regression @smoke @ff

  Scenario: Create account through main Sign Up button
    Given I am on main Carfax page
    When I click on Sign Up button
    And I can fill out "email" , "password"
    Then I click on Sign Up button to complete request
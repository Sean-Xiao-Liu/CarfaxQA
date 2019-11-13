Feature: Create account
  Scenario: Create account through UCL page

    Given I am on main Carfax page
    And I navigate to Find a Used Car page
    When I click on Sign Up button from UCL
    And I fill out "email" , "password" , "zipcode" to create a new account
    Then I click on Create account button


Feature: Create account


<<<<<<< HEAD
  @sign-1 @smoke @ff
  Scenario: Create account through UCL page
=======

  @smoke
  Scenario: Create account through UCL page

>>>>>>> e3f58060d95adcb7a8e687a3ba7fee7efe4c4746
    Given I am on main Carfax page
    And I navigate to Find a Used Car page
    When I click on Sign Up button from UCL
    And I fill out "email" , "password" , "zipcode" to create a new account
<<<<<<< HEAD
    Then I click on Create account button
=======
    Then I click on Create account button

>>>>>>> e3f58060d95adcb7a8e687a3ba7fee7efe4c4746

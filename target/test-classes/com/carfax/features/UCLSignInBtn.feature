Feature: Forgot Password and Create account trough Sign in feature


  @sign-1  @rerun

  Scenario: Create account through SignIn option

    Given I am on main Carfax page
    And I navigate to Find a Used Car page
    When I click on Sign In button
    And I can fill out email , password
    And If i see error message
    Then I click on Create account option
    And I fill out "email" , "password" , "zipcode" to create a new account

  @sign-1  @rerun

  Scenario: Forgot password through SignIn option
      Given I am on main Carfax page
      And I navigate to Find a Used Car page
      When I click on Sign In button
    And I can fill out email , password
      And If i see error message
      Then I click on Forgot Password button
      And I fill out email and click on reset password


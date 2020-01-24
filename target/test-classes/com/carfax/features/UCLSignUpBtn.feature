Feature: Create account


  @sign-1 @smoke @ff
  Scenario Outline: Create account through UCL page with new credentials
    Given I am on main Carfax page
    And I navigate to Find a Used Car page
    When I click on Sign Up button from UCL
    And I fill out email , password , "<zipcode>" to create a new account
    Then I click on Create account button
    Examples:
    |zipcode|
    |22201  |
    |20142  |

  @signUp
    Scenario Outline: Already exist credentials login trough sign Up page

      Given I am on main Carfax page
      And I navigate to Find a Used Car page
      When I click on Sign Up button from UCL
      And I fill out "<email>" , "<password>" , "<zipcode>" to create a new account
      Then I see regular sign in page
      And I can fill out "<email>" , "<password>" and log in to account
      Examples:
        |zipcode|email|password|
        |22201  |beta1@gmail.com|Qwe123123|
        |20142  |betasav2@gmail.com|Qwe123123|
        |22304  |betasav1@gmail.com|Qwe123123|


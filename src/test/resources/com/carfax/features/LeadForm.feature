Feature: Lead form on VDP
  @tc-2

  Scenario Outline: Positive testing with first name, last name , zip code and phone number presented. NO ERROR MESSAGES SHOWED
    Given I am on main Carfax page
    And I navigate to Find a Used Car page
    And I fill out "<make>" , "<model>" , "<zipcode>" of the car that I want to search
    When I click on next and show me results button
    And I click on particular car that I want
    And I navigate to Lead Form and fill out First Name, Last Name, Zip code and Phone number
    Then I click on Send Message to that dealer


    Examples:
      | make       | model           | zipcode |
      | Hyundai       | Sonata              | 22201   |
      | Honda        | Civic        | 75501   |
      | Infiniti | Q50 | 22033   |
      | Toyota     | Camry           | 22304   |
Scenario Outline: Lead form with first name, last name, zip code and email
  Given I am on main Carfax page
  And I navigate to Find a Used Car page
  And I fill out "<make>" , "<model>" , "<zipcode>" of the car that I want to search
  When I click on next and show me results button
  And I click on particular car that I want
  And I navigate to Lead Form and fill out First Name, Last Name, Zip code and email
  Then I click on Send Message to that dealer


  Examples:
    | make       | model           | zipcode |
    | Hyundai       | Sonata              | 22201   |
    | Honda        | Civic        | 75501   |
    | Infiniti | Q50 | 22033   |
    | Toyota     | Camry           | 22304   |




  Scenario Outline: Negative scenario where none of the fields are filled out
        Given I am on main Carfax page
        And I navigate to Find a Used Car page
        And I fill out "<make>" , "<model>" , "<zipcode>" of the car that I want to search
        When I click on next and show me results button
        And I click on particular car that I want
        And I navigate to Lead Form and cleaning zipcode which is by default already filled out
        Then I click on Send Message to that dealer and should see error messages are displayed



        Examples:
          | make       | model           | zipcode |
          | Hyundai       | Sonata              | 22201   |
          | Honda        | Civic        | 75501   |
          | Infiniti | Q50 | 22033   |
          | Toyota     | Camry           | 22304   |

Scenario Outline: Error message for 'Last name is required' is displayed
  Given I am on main Carfax page
  And I navigate to Find a Used Car page
  And I fill out "<make>" , "<model>" , "<zipcode>" of the car that I want to search
  When I click on next and show me results button
  And I click on particular car that I want
  And I navigate to Lead Form and fill out First Name,  Zip code and Phone number
  Then I click on Send Message to that dealer and should see Last Name error message are displayed



  Examples:
    | make       | model           | zipcode |
    | Hyundai       | Sonata              | 22201   |
    | Honda        | Civic        | 75501   |
    | Infiniti | Q50 | 22033   |
    | Toyota     | Camry           | 22304   |

  Scenario Outline: Error message for 'First name is required' is displayed
    Given I am on main Carfax page
    And I navigate to Find a Used Car page
    And I fill out "<make>" , "<model>" , "<zipcode>" of the car that I want to search
    When I click on next and show me results button
    And I click on particular car that I want
    And I navigate to Lead Form and fill out Last Name,  Zip code and Phone number
    Then I click on Send Message to that dealer and should see First Name error message are displayed



    Examples:
      | make       | model           | zipcode |
      | Hyundai       | Sonata              | 22201   |
      | Honda        | Civic        | 75501   |
      | Infiniti | Q50 | 22033   |
      | Toyota     | Camry           | 22304   |




  Scenario Outline: Error message for 'Zip Code name is required' is displayed
    Given I am on main Carfax page
    And I navigate to Find a Used Car page
    And I fill out "<make>" , "<model>" , "<zipcode>" of the car that I want to search
    When I click on next and show me results button
    And I click on particular car that I want
    And I navigate to Lead Form and fill out First Name,  Last name and Phone number
    Then I click on Send Message to that dealer and should see Zip code error message are displayed



    Examples:
      | make       | model           | zipcode |
      | Hyundai       | Sonata              | 22201   |
      | Honda        | Civic        | 75501   |
      | Infiniti | Q50 | 22033   |
      | Toyota     | Camry           | 22304   |
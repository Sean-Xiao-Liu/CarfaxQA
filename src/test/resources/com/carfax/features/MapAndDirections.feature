
 Feature: Map and Directions page


   @m&d-1
   Scenario Outline: Map and Directions page from VDP

     Given I am on main Carfax page
     And I navigate to Find a Used Car page
     And I fill out "<make>" , "<model>" , "<zipcode>" of the car that I want to search
     When I click on next and show me results button
     And I click on particular car that I want
     And I click on map&directions link from dealer info window
     Then I see map&directions window

     Examples:
       | make       | model           | zipcode |
       | Audi       | Q3              | 22201   |
       | Honda        | Civic        | 75501   |
       | Land Rover | Discovery Sport | 22033   |
       | Toyota     | Camry           | 22304   |




package com.carfax_ucl.step_definitions;

import com.carfax_ucl.pages.BasePage;
import com.carfax_ucl.utilities.Driver;
import com.github.javafaker.Faker;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;
import java.util.Set;

public class MapAndDirectionsStepDef {

<<<<<<< HEAD
  public  WebDriver driver= Driver.get();
   public BasePage basePage=new BasePage();

   public WebDriverWait wait=new WebDriverWait(Driver.get(),3);
   public JavascriptExecutor jse = (JavascriptExecutor)driver;
Faker faker=new Faker();
=======
    public  WebDriver driver= Driver.get();
    public BasePage basePage=new BasePage();

    public WebDriverWait wait=new WebDriverWait(Driver.get(),3);
    public JavascriptExecutor jse = (JavascriptExecutor)driver;
    public Faker faker=new Faker();
>>>>>>> e3f58060d95adcb7a8e687a3ba7fee7efe4c4746

    @When("I click on map&directions link from dealer info window")
    public void i_click_on_map_directions_link_from_dealer_info_window() {

        Set<String> windows = driver.getWindowHandles();
        for(String window : windows){
            if(driver.switchTo().window(window).getCurrentUrl().contains("vehicle")) {
                System.out.println(driver.getTitle());break;}
        }
        WebElement length=driver.findElement(By.xpath("//*[@id=\"react-app\"]/div/div[1]/div[2]/div[1]/section[3]/div/div[2]/div[2]/div/div/div[1]"));


        jse.executeScript("arguments[0].scrollIntoView(true);",length);
        basePage.getMapAndDirections().mapAndDirectionVDP.click();


    }

<<<<<<< HEAD
    @Then("I see map&directions window")
    public void i_see_map_directions_window() {
=======


    @When("I fill out address , {string}, {string} to get direction")
    public void i_fill_out_address_to_get_direction(String state1, String zipcode) {

>>>>>>> e3f58060d95adcb7a8e687a3ba7fee7efe4c4746
        Set<String> mapWindow = driver.getWindowHandles();
        for(String map : mapWindow){
            if(driver.switchTo().window(map).getCurrentUrl().contains("map")) {
                System.out.println(driver.getTitle());break;}
        }

        WebElement searchForm=driver.findElement(By.xpath("//*[@id=\"react-app\"]/div/div[1]/div[2]/div[1]/div[4]/div[1]/div/div/div/div/span"));
        jse.executeScript("arguments[0].scrollIntoView(true);",searchForm);


        String address=faker.address().streetAddress();
        System.out.println(address);
<<<<<<< HEAD
        String state1="Arizona";
=======

>>>>>>> e3f58060d95adcb7a8e687a3ba7fee7efe4c4746
        basePage.getMapAndDirections().locationSign.isDisplayed();
        basePage.getMapAndDirections().phoneNumberSign.isDisplayed();
        basePage.getMapAndDirections().addressField.click();
        basePage.getMapAndDirections().addressField.sendKeys(address);



        List<WebElement> state=driver.findElements(By.xpath("//select[@name='state']/option"));
        System.out.println("state = " + state.size());
        for(WebElement statePick :state){
            if(statePick.getText().trim().equals(state1)){
                statePick.click();
                break;
            }

        }


        basePage.getMapAndDirections().zipCode.click();
<<<<<<< HEAD
        basePage.getMapAndDirections().zipCode.sendKeys("22201");
=======
        basePage.getMapAndDirections().zipCode.sendKeys(zipcode);
>>>>>>> e3f58060d95adcb7a8e687a3ba7fee7efe4c4746
        wait.until(ExpectedConditions.elementToBeClickable(basePage.getMapAndDirections().getDirections)).click();

        Assert.assertTrue(driver.findElement(By.cssSelector("div[jstcache='23']")).isDisplayed());

<<<<<<< HEAD
=======
    }
    @Then("I see map&directions window")
    public void i_see_map_directions_window()  {
>>>>>>> e3f58060d95adcb7a8e687a3ba7fee7efe4c4746
        jse.executeScript("window.scrollBy(0,-600)");
        wait.until(ExpectedConditions.visibilityOf(basePage.getMapAndDirections().mobileSign));
        wait.until(ExpectedConditions.visibilityOf(basePage.getSendToMyPhone().sendToMyPhoneHeader)).isDisplayed();
        Assert.assertTrue(basePage.getFindDealerPage().dealerLocation.isDisplayed());
        Assert.assertTrue(basePage.getFindDealerPage().dealerName.isDisplayed());
        Assert.assertTrue(driver.getCurrentUrl().contains("map"));


<<<<<<< HEAD

    }
=======
    }

>>>>>>> e3f58060d95adcb7a8e687a3ba7fee7efe4c4746
}

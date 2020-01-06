package com.carfax_ucl.step_definitions;

import com.carfax_ucl.pages.FindDealerPage;
import com.carfax_ucl.utilities.Driver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.util.List;
public class FindDealerStepDef {


    public FindDealerPage findDealerPage = new FindDealerPage();
    public WebDriverWait wait = new WebDriverWait(Driver.get(), 1);
    public WebDriver driver = Driver.get();



    @When("I click on Find a Dealer button")
    public void i_click_on_Find_a_Dealer_button() {
        wait.until(ExpectedConditions.elementToBeClickable(findDealerPage.findADealerBtn)).click();
    }
    @Then("I choose a car , radius and zipcode to find a dealer and click submit")
    public void i_choose_a_car_radius_and_zipcode_to_find_a_dealer_and_click_submit() {
        for (int i = 0; i < 5; i++) {
            findDealerPage.selectMakeBtn.click();
            List<WebElement> listOfMakes = driver.findElements(By.xpath("//option[contains(@id,'make_')]"));
            //todo clicking on 'select make' button
            int make = i;
            wait.until(ExpectedConditions.elementToBeClickable(listOfMakes.get(make))).click();
            ++make;
            Select select = new Select(driver.findElement(By.xpath("//select[@class='search-radius'][@name='radius']")));
            select.selectByIndex(2);
            WebElement zipcode = findDealerPage.zipcode;
            zipcode.click();
            String zipcodeStr = zipcode.getAttribute("value");
            if (!zipcodeStr.isEmpty()) {
                zipcode.click();
                zipcode.clear();
                zipcode.sendKeys("22204");
            } else {
                zipcode.sendKeys("22201");
            }
            findDealerPage.showMeBtn.click();
            break;
        }
    }
    @Given("I am able to see dealer list")
    public void i_am_able_to_see_dealer_list() {
        findDealerPage.DealerHeaderTitle.isDisplayed();
    }
    @When("I click on any dealer page that I want")
    public void i_click_on_any_dealer_page_that_I_want() {
        for (int i=0;i<5;i++){
            List<WebElement> listOfDealers = driver.findElements(By.xpath("//article[@class='fad-searchListItem']"));
            if (i < 33) {
                listOfDealers.get(0).click();
                Assert.assertTrue(findDealerPage.dealerName.isDisplayed());
                Assert.assertTrue(findDealerPage.dealerLocation.isDisplayed());
                Assert.assertTrue(findDealerPage.visitDealerWebsite.isDisplayed());
            } else if (i >= 33 && findDealerPage.noResultIsFoundMessage.isDisplayed()) {
            } else if (i >= 33) {
                listOfDealers.get(i).click();
                Assert.assertTrue(findDealerPage.dealerName.isDisplayed());
                Assert.assertTrue(findDealerPage.dealerLocation.isDisplayed());
                Assert.assertTrue(findDealerPage.visitDealerWebsite.isDisplayed());
            }break;
        }
    }
    @Then("I able to see cars from specific dealer")
    public void i_able_to_see_cars_from_specific_dealer () {
        findDealerPage.HomeBtn.click();
        //wait.until(ExpectedConditions.elementToBeClickable(findDealerPage.carfaxLogo)).click();
    }
}
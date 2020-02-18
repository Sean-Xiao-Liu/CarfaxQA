package com.carfax_ucl.step_definitions;

import com.carfax_ucl.pages.BasePage;
import com.carfax_ucl.utilities.Driver;
import com.carfax_ucl.utilities.TestBase;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.util.List;
public class FindDealerStepDef {


   BasePage basePage = new BasePage();
    public WebDriverWait wait = new WebDriverWait(Driver.get(), 1);
    public WebDriver driver = Driver.get();
    TestBase testBase=new TestBase();



    @When("I click on Find a Dealer button")
    public void i_click_on_Find_a_Dealer_button() {
        wait.until(ExpectedConditions.elementToBeClickable(basePage.getFindDealerPage().findADealerBtn)).click();
    }
    @Then("I choose a {string} , {string} and {string} to find a dealer and click submit")
    public void i_choose_a_and_to_find_a_dealer_and_click_submit(String make, String radius, String zipcode) {

        wait.until(ExpectedConditions.elementToBeClickable(driver.findElement(By.cssSelector("select[class='search-make']")))).click();
        List <WebElement> makes =driver.findElements(By.xpath("//optgroup[@label='Popular Makes']/option"));

        for(WebElement temp :makes){
            if(temp.getText().trim().equals(make)){
                temp.click();
                break;
            }

        }

        basePage.getFindDealerPage().radius.click();
        List <WebElement> radiuses =driver.findElements(By.xpath("//select[@class='search-radius'][@name='radius']/option"));
        for(WebElement temp :radiuses){
            if(temp.getText().trim().equals(radius)){
                temp.click();
                break;
            }

        }


            wait.until(ExpectedConditions.elementToBeClickable(basePage.getFindDealerPage().zipcode)).click();
        basePage.getFindDealerPage().zipcode.sendKeys(zipcode);
        wait.until(ExpectedConditions.elementToBeClickable(basePage.getFindDealerPage().showMeBtn)).click();


    }
    @Given("I am able to see dealer list")
    public void i_am_able_to_see_dealer_list() {
        testBase.waitFor(2);
        wait.until(ExpectedConditions.visibilityOf(basePage.getFindDealerPage().DealerHeaderTitle)).isDisplayed();
    }


    @When("I click on any dealer page that I want")
    public void i_click_on_any_dealer_page_that_I_want() {
        for (int i=0;i<5;i++){
            List<WebElement> listOfDealers = driver.findElements(By.cssSelector("article[class='fad-searchListItem']"));
            if (i < 33) {
                listOfDealers.get(0).click();
                Assert.assertTrue(basePage.getFindDealerPage().dealerName.isDisplayed());
                Assert.assertTrue(basePage.getFindDealerPage().dealerLocation.isDisplayed());
                Assert.assertTrue(basePage.getFindDealerPage().visitDealerWebsite.isDisplayed());
            } else if (i >= 33 && basePage.getFindDealerPage().noResultIsFoundMessage.isDisplayed()) {
            } else if (i >= 33) {
                listOfDealers.get(i).click();
                Assert.assertTrue(basePage.getFindDealerPage().dealerName.isDisplayed());
                Assert.assertTrue(basePage.getFindDealerPage().dealerLocation.isDisplayed());
                Assert.assertTrue(basePage.getFindDealerPage().visitDealerWebsite.isDisplayed());
            }break;
        }
    }
    @Then("I able to see cars from specific dealer")
    public void i_able_to_see_cars_from_specific_dealer () {
        basePage.getFindDealerPage().HomeBtn.click();
        //wait.until(ExpectedConditions.elementToBeClickable(findDealerPage.carfaxLogo)).click();
    }
}
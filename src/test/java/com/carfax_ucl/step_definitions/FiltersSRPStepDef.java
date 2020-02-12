package com.carfax_ucl.step_definitions;

import com.carfax_ucl.pages.BasePage;
import com.carfax_ucl.utilities.Driver;
import com.carfax_ucl.utilities.TestBase;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;


public class FiltersSRPStepDef {

TestBase testBase=new TestBase();
BasePage basePage=new BasePage();

    public WebDriverWait wait = new WebDriverWait(Driver.get(), 1);
    public WebDriver driver = Driver.get();


    @When("I choose pillars, {string},{string} and trim")
    public void i_choose_pillars_and(String minYear, String maxYear) {
        //todo selecting 4 pillars filters

        testBase.waitFor(2);
        testBase.selectCheckBox(basePage.getFiltersSRPPage().FourPillars.get(1),true);
        testBase.selectCheckBox(basePage.getFiltersSRPPage().FourPillars.get(2),true);

        //todo get Min Year dropdown
        List<WebElement> listForMinYear=driver.findElements(By.xpath("//select[@id='minYear-range-select']/option"));
        for(WebElement temp :listForMinYear){
            if(temp.getText().trim().equals(minYear)){
                temp.click();
                break;
            }

        }

        //todo get Max year dropdown
        List<WebElement> listForMaxYear=driver.findElements(By.xpath("//select[@id='maxYear-range-select']/option"));
        for(WebElement temp :listForMaxYear){
            if(temp.getText().trim().equals(maxYear)){
                temp.click();
                break;
            }

        }

        //todo picking a color
        testBase.scrollToElement(driver.findElement(By.cssSelector("div[class='srp-filter--header row']")));
        List<WebElement> colors=driver.findElements(By.xpath("//span[contains(@id,'colorsFilter_')]"));
        colors.get(2).click();

        //todo clicking on trim level
        basePage.getFiltersSRPPage().trimLevel.get(1).click();
        wait.until(ExpectedConditions.urlContains("Used"));




    }

    @Then("I can verify that filters are displayed")
    public void i_can_verify_that_filters_are_displayed() {
        //todo go back to verify a header of the car

        testBase.scrollToElement(driver.findElement(By.xpath("//div[@class='results-header-title']")));
        Assert.assertTrue(driver.getCurrentUrl().contains("Used"));
    }

}

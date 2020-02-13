package com.carfax_ucl.step_definitions;

import com.carfax_ucl.pages.BasePage;
import com.carfax_ucl.utilities.Driver;
import com.carfax_ucl.utilities.TestBase;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.Set;

public class FooterLinksFreeServicesStepDef {

    TestBase testBase=new TestBase();
    BasePage basePage=new BasePage();

    public WebDriverWait wait = new WebDriverWait(Driver.get(), 3);
    public WebDriver driver = Driver.get();

    @Given("I scroll down to footer links")
    public void i_scroll_down_to_footer_links() {
        testBase.waitFor(1);
        testBase.scrollToElement(basePage.getFooterLinksPage().footerLinksHeader);
      testBase.waitFor(1);


    }

    //todo Scenario #1
    @When("I click on myCarfax link")
    public void i_click_on_myCarfax_link() {


        basePage.getFooterLinksPage().myCarfax.click();


    }

    @Then("It navigates me to the My Car Maintenance page")
    public void it_navigates_me_to_the_My_Car_Maintenance_page() {
        Set<String> windows = driver.getWindowHandles();
        for(String window : windows){
            if(driver.switchTo().window(window).getCurrentUrl().contains("Service")) {
                System.out.println(driver.getTitle());break;}
        }
        Assert.assertTrue(driver.getCurrentUrl().contains("Service"));

    }
    //todo Scenario #2

    @When("I click on Resources link")
    public void i_click_on_Resources_link() {


        wait.until(ExpectedConditions.elementToBeClickable(basePage.getFooterLinksPage().resources)).click();
    }

    @Then("It navigates me to the Press page")
    public void it_navigates_me_to_the_Press_page() {
        Set<String> windows = driver.getWindowHandles();
        for(String window : windows){
            if(driver.switchTo().window(window).getCurrentUrl().contains("resources")) {
                System.out.println(driver.getTitle());break;}
        }
        Assert.assertTrue(driver.getCurrentUrl().contains("resources"));
        Assert.assertTrue(driver.findElement(By.xpath("//h1[contains(text(),'Press')]")).getText().contains("Press"));

    }
    //todo Scenario #3
    @When("I click on Recalls link")
    public void i_click_on_Recalls_link() {

    basePage.getFooterLinksPage().recalls.click();

    }

    @Then("It navigates me to the Vehicle Recall Check page")
    public void it_navigates_me_to_the_Vehicle_Recall_Check_page() {
        Set<String> windows = driver.getWindowHandles();
        for(String window : windows){
            if(driver.switchTo().window(window).getCurrentUrl().contains("recall")) {
                System.out.println(driver.getTitle());break;}
        }
        Assert.assertTrue(driver.getCurrentUrl().contains("recall"));
        Assert.assertTrue(driver.findElement(By.xpath("//h1[contains(text(),'Vehicle Recall Check')]")).getText().contains("Vehicle Recall Check"));
    }
    //todo Scenario #4
    @When("I click on Sample Report link")
    public void i_click_on_Sample_Report_link() {

        basePage.getFooterLinksPage().sampleReports.click();
    }

    @Then("It navigates me to the View Sample CARFAX Reports page")
    public void it_navigates_me_to_the_View_Sample_CARFAX_Reports_page() {
        Set<String> windows = driver.getWindowHandles();
        for(String window : windows){
            if(driver.switchTo().window(window).getCurrentUrl().contains("sample-carfax-report")) {
                System.out.println(driver.getTitle());break;}
        }
        Assert.assertTrue(driver.getCurrentUrl().contains("sample-carfax-report"));
        Assert.assertTrue(driver.findElement(By.xpath("//h1[contains(text(),'View Sample CARFAX Reports')]")).getText().contains("View Sample CARFAX Reports"));
    }
}

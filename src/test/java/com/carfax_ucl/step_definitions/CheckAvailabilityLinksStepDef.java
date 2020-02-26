package com.carfax_ucl.step_definitions;

import com.carfax_ucl.pages.BasePage;
import com.carfax_ucl.utilities.Driver;
import com.carfax_ucl.utilities.TestBase;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.Set;

public class CheckAvailabilityLinksStepDef {



    BasePage basePage = new BasePage();
    public WebDriverWait wait = new WebDriverWait(Driver.get(), 1);
    public WebDriver driver = Driver.get();
    TestBase testBase=new TestBase();





    @Then("I click on Privacy Policy and navigate to the page")
    public void i_click_on_Privacy_Policy_and_navigate_to_the_page() {


        Set<String> windows = driver.getWindowHandles();
        for(String window : windows){
            if(driver.switchTo().window(window).getCurrentUrl().contains("vehicle")) {
                System.out.println(driver.getTitle());break;}
        }
        wait.until(ExpectedConditions.urlContains("vehicle"));


        JavascriptExecutor jse = (JavascriptExecutor)driver;
        jse.executeScript("arguments[0].scrollIntoView(true);",basePage.getCheckAvailabilityLinks().checkAvailability);
        testBase.waitFor(2);

        wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.xpath("//div[2]/div/div[1]/div/span[2]/i"))));


        basePage.getCheckAvailabilityLinks().prvacyPolicy.click();
        testBase.waitFor(2);
        Set<String> privacy = driver.getWindowHandles();
        for(String window : privacy){
            if(driver.switchTo().window(window).getCurrentUrl().contains("privacy-statement")) {
                System.out.println(driver.getTitle());break;}
        }

testBase.waitFor(1);
        //todo verifying that url contains privacy statement and compare it with actual result
        Assert.assertTrue(wait.until(ExpectedConditions.urlContains("privacy-statement")));
        Assert.assertEquals(basePage.getCheckAvailabilityLinks().title.getText(),"CARFAX Privacy Statement");
    }

    @Then("I click on Terms of Use and navigate to the page")
    public void i_click_on_Terms_of_Use_and_navigate_to_the_page() {
        Set<String> windows = driver.getWindowHandles();
        for(String window : windows){
            if(driver.switchTo().window(window).getCurrentUrl().contains("vehicle")) {
                System.out.println(driver.getTitle());break;}
        }
        wait.until(ExpectedConditions.urlContains("vehicle"));


        JavascriptExecutor jse = (JavascriptExecutor)driver;
        jse.executeScript("arguments[0].scrollIntoView(true);",basePage.getCheckAvailabilityLinks().checkAvailability);
        testBase.waitFor(2);

        wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.xpath("//div[2]/div/div[1]/div/span[2]/i"))));


        basePage.getCheckAvailabilityLinks().termsOfUse.click();

        testBase.waitFor(2);
        Set<String> terms = driver.getWindowHandles();
        for(String window : terms){
            if(driver.switchTo().window(window).getCurrentUrl().contains("terms-of-use")) {
                System.out.println(driver.getTitle());break;}
        }

        testBase.waitFor(1);
        //todo verifying that url contains terms-of-use and compare it with actual result

        Assert.assertTrue(wait.until(ExpectedConditions.urlContains("terms-of-use")));
        Assert.assertEquals(basePage.getCheckAvailabilityLinks().title.getText(),"Terms of Use");


    }


}

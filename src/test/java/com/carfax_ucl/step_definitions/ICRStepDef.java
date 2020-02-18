package com.carfax_ucl.step_definitions;

import com.carfax_ucl.pages.BasePage;
import com.carfax_ucl.utilities.Driver;
import com.carfax_ucl.utilities.TestBase;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.Set;

public class ICRStepDef {
    TestBase testBase=new TestBase();
    BasePage basePage=new BasePage();

    public WebDriverWait wait = new WebDriverWait(Driver.get(), 1);
    public WebDriver driver = Driver.get();




    @Then("I click on View Free Carfax Report")
    public void i_click_on_View_Free_Carfax_Report() {

                Set<String> windows = driver.getWindowHandles();
        for(String window : windows){
            if(driver.switchTo().window(window).getCurrentUrl().contains("vehicle")) {
                System.out.println(driver.getTitle());break;}
        }
testBase.waitFor(3);
wait.until(ExpectedConditions.urlContains("vehicle"));
        testBase.scrollToElement(driver.findElement(By.cssSelector("h4[class='carfax-snapshot-box__title']")));
        WebElement icr=driver.findElement(By.cssSelector("a[class='carfax-snapshot-box__button button large']"));
        icr.click();

        Set<String> wind = driver.getWindowHandles();
        for(String window : wind){
            if(driver.switchTo().window(window).getCurrentUrl().contains("VehicleHistory")) {
                System.out.println(driver.getTitle());break;}
        }

        testBase.waitFor(1);
        wait.until(ExpectedConditions.urlContains("VehicleHistory"));

        Assert.assertTrue(driver.getCurrentUrl().contains("VehicleHistory"));


    }

}

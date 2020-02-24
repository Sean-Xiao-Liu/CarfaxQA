package com.carfax_ucl.step_definitions;

import com.carfax_ucl.pages.BasePage;
import com.carfax_ucl.utilities.Driver;
import com.carfax_ucl.utilities.TestBase;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.Set;

public class FooterLinksMoreCarfaxStepDef {
    TestBase testBase=new TestBase();
    BasePage basePage=new BasePage();

    public WebDriverWait wait = new WebDriverWait(Driver.get(), 1);
    public WebDriver driver = Driver.get();
    @When("I click on About CARFAX link")
    public void i_click_on_About_CARFAX_link() {
        basePage.getFooterLinksPage().aboutCarfax.click();
        testBase.waitFor(1);
    }

    @Then("It navigates me to the About CARFAX page")
    public void it_navigates_me_to_the_About_CARFAX_page() {
        Set<String> windows = driver.getWindowHandles();
        for(String window : windows){
            if(driver.switchTo().window(window).getCurrentUrl().contains("company")) {
                System.out.println(driver.getTitle());break;}
        }

        testBase.waitFor(2);

        wait.until(ExpectedConditions.urlContains("about"));

        Assert.assertTrue(driver.getCurrentUrl().contains("company"));
        Assert.assertTrue(driver.findElement(By.xpath("//h1[contains(text(),'About CARFAX')]")).getText().contains("About CARFAX"));
    }

    @When("I click on Blog link")
    public void i_click_on_Blog_link() {
        basePage.getFooterLinksPage().blog.click();
    }

    @Then("It navigates me to the Automotive News and Advice page")
    public void it_navigates_me_to_the_Automotive_News_and_Advice_page() {
        Set<String> windows = driver.getWindowHandles();
        for(String window : windows){
            if(driver.switchTo().window(window).getCurrentUrl().contains("blog")) {
                System.out.println(driver.getTitle());break;}
        }
        testBase.waitFor(2);
        wait.until(ExpectedConditions.urlContains("blog"));

        Assert.assertTrue(driver.getCurrentUrl().contains("blog"));
        Assert.assertTrue(driver.findElement(By.xpath("//h1[contains(text(),'Automotive News and Advice')]")).getText().contains("Automotive News and Advice"));
    }

    @When("I click on Press Room link")
    public void i_click_on_Press_Room_link() {

        basePage.getFooterLinksPage().pressRoom.click();
        testBase.waitFor(1);
    }

    @Then("It navigates me to the Press page from more Carfax")
    public void it_navigates_me_to_the_Press_page_from_more_Carfax() {
        Set<String> windows = driver.getWindowHandles();
        for(String window : windows){
            if(driver.switchTo().window(window).getCurrentUrl().contains("press")) {
                System.out.println(driver.getTitle());break;}
        }
        testBase.waitFor(1);
        wait.until(ExpectedConditions.urlContains("press"));

        Assert.assertTrue(driver.getCurrentUrl().contains("press"));
        Assert.assertTrue(driver.findElement(By.xpath("//h1[contains(text(),'Press')]")).getText().contains("Press"));

    }

    @When("I click on Carfax for Dealers link")
    public void i_click_on_Carfax_for_Dealers_link() {
        basePage.getFooterLinksPage().carfaxForDealers.click();
        testBase.waitFor(1);

    }

    @Then("It navigates me to the Carfax for Dealers page")
    public void it_navigates_me_to_the_Carfax_for_Dealers_page() {
        Set<String> windows = driver.getWindowHandles();
        for(String window : windows){
            if(driver.switchTo().window(window).getCurrentUrl().contains("landingPage")) {
                System.out.println(driver.getTitle());break;}
        }
        testBase.waitFor(2);

        wait.until(ExpectedConditions.urlContains("landingPage"));

        Assert.assertTrue(driver.getCurrentUrl().contains("landingPage"));
    }

    @When("I click on CARFAX Banking & Insurance Group link")
    public void i_click_on_CARFAX_Banking_Insurance_Group_link() {

        wait.until(ExpectedConditions.elementToBeClickable(basePage.getFooterLinksPage().carfaxBanking)).click();
        testBase.waitFor(1);
    }

    @Then("It navigates me to the CARFAX Banking & Insurance Group page")
    public void it_navigates_me_to_the_CARFAX_Banking_Insurance_Group_page() {
        Set<String> windows = driver.getWindowHandles();
        for(String window : windows){
            if(driver.switchTo().window(window).getCurrentUrl().contains("bank")) {
                System.out.println(driver.getTitle());break;}
        }
        testBase.waitFor(2);
        wait.until(ExpectedConditions.urlContains("bank"));

        Assert.assertTrue(driver.getCurrentUrl().contains("bank"));
    }

    @When("I click on Careers link")
    public void i_click_on_Careers_link() {

        basePage.getFooterLinksPage().careers.click();
    }

    @Then("It navigates me to the Careers page")
    public void it_navigates_me_to_the_Careers_page() {
        Set<String> windows = driver.getWindowHandles();
        for(String window : windows){
            if(driver.switchTo().window(window).getCurrentUrl().contains("careers")) {
                System.out.println(driver.getTitle());break;}
        }

        testBase.waitFor(1);
        wait.until(ExpectedConditions.urlContains("careers"));

        Assert.assertTrue(driver.getCurrentUrl().contains("careers"));
    }
}

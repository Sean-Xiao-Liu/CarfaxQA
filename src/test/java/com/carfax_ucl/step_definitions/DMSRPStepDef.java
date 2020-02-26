package com.carfax_ucl.step_definitions;

import com.carfax_ucl.pages.BasePage;
import com.carfax_ucl.utilities.Driver;
import com.carfax_ucl.utilities.TestBase;
import com.github.javafaker.Faker;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.Set;

public class DMSRPStepDef {
    public WebDriver driver= Driver.get();
    public BasePage basePage=new BasePage();

    public WebDriverWait wait=new WebDriverWait(Driver.get(),3);
    public JavascriptExecutor jse = (JavascriptExecutor)driver;
    public Faker faker=new Faker();
    public TestBase testBase=new TestBase();

    @When("I click on Dealer Inventory link")
    public void i_click_on_Dealer_Inventory_link() {


        Set<String> windows = driver.getWindowHandles();
        for(String window : windows){
            if(driver.switchTo().window(window).getCurrentUrl().contains("vehicle")) {
                System.out.println(driver.getTitle());break;}
        }


        jse.executeScript("arguments[0].scrollIntoView(true);",
                //driver.findElement(By.xpath("/html/body/div[3]/div/div[1]/div[2]/div[1]/section[3]/div/div[2]/div[2]/div/div/div[1]/h2")));
                basePage.getDealerWebsitePage().dealerInfo);


        testBase.waitFor(2);

        basePage.getDmsrpPage().dealerInventory.click();



    }

    @Then("I am able to see DMSRP page")
    public void i_am_able_to_see_DMSRP_page() {
        Set<String> windows = driver.getWindowHandles();
        for(String window : windows){
            if(driver.switchTo().window(window).getCurrentUrl().contains("Dealer-")) {
                System.out.println(driver.getTitle());break;}
        }
//todo verifying that elements are displayed on the page
        Assert.assertTrue(basePage.getDmsrpPage().salesTable.isDisplayed());

        Assert.assertTrue(basePage.getDmsrpPage().serviceTable.isDisplayed());

        Assert.assertTrue(basePage.getDmsrpPage().titleHeader.isDisplayed());

        Assert.assertTrue(basePage.getDmsrpPage().fourPillars.isDisplayed());

        testBase.waitFor(1);
        wait.until(ExpectedConditions.elementToBeClickable(basePage.getDmsrpPage().service)).click();
        testBase.waitFor(2);
        //todo verifying that dealer title is Displayed
        wait.until(ExpectedConditions.visibilityOf(basePage.getDmsrpPage().dealerTitle));
        Assert.assertTrue( basePage.getDmsrpPage().dealerTitle.isDisplayed());

        wait.until(ExpectedConditions.elementToBeClickable(basePage.getDmsrpPage().ratingsReviews)).click();

        testBase.waitFor(2);
        //todo veryfing that all review is displayed
        wait.until(ExpectedConditions.visibilityOf(basePage.getDmsrpPage().allReviews));
        Assert.assertTrue( basePage.getDmsrpPage().allReviews.isDisplayed());

        //todo verifying that sales review only  is displayed

        wait.until(ExpectedConditions.visibilityOf(basePage.getDmsrpPage().salesReviewsOnly));
        Assert.assertTrue(basePage.getDmsrpPage().salesReviewsOnly.isDisplayed());

        //todo verifying that service review only is Displayed

        wait.until(ExpectedConditions.visibilityOf(basePage.getDmsrpPage().serviceReviewsOnly));
        Assert.assertTrue(basePage.getDmsrpPage().serviceReviewsOnly.isDisplayed());


        //todo verify that rating table is Displayed

        wait.until(ExpectedConditions.visibilityOf(basePage.getDmsrpPage().ratingsTable));
        Assert.assertTrue(basePage.getDmsrpPage().ratingsTable.isDisplayed());

    }
}
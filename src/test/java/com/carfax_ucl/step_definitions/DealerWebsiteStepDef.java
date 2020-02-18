package com.carfax_ucl.step_definitions;

import com.carfax_ucl.pages.BasePage;
import com.carfax_ucl.utilities.Driver;
import com.carfax_ucl.utilities.TestBase;
import com.github.javafaker.Faker;
import cucumber.api.java.en.Then;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.Set;

public class DealerWebsiteStepDef {
    public WebDriver driver= Driver.get();
    public BasePage basePage=new BasePage();

    public WebDriverWait wait=new WebDriverWait(Driver.get(),3);
    public JavascriptExecutor jse = (JavascriptExecutor)driver;
    public Faker faker=new Faker();
    public TestBase testBase=new TestBase();





    @Then("I click on Dealer Website and I navigate to website")
    public void i_click_on_Dealer_Website_and_I_navigate_to_website() {
        Set<String> windows = driver.getWindowHandles();
        for(String window : windows){
            if(driver.switchTo().window(window).getCurrentUrl().contains("vehicle")) {
                System.out.println(driver.getTitle());break;}
        }
        wait.until(ExpectedConditions.urlContains("vehicle"));

        WebElement length=driver.findElement(By.xpath("/html/body/div[3]/div[3]/div/div[1]/div/div/section[3]/div/div[2]/div[2]/div/div/div[1]/h2"));
        jse.executeScript("arguments[0].scrollIntoView(true);",length);

      wait.until(ExpectedConditions.visibilityOf(basePage.getDealerWebsitePage().dealerName)).isDisplayed();

       basePage.getDealerWebsitePage().dealerWebsite.click();

       testBase.waitFor(1);
Set<String> website=driver.getWindowHandles();

        for(String window : website){
            if(driver.switchTo().window(window).getCurrentUrl().contains(".com")) {
                System.out.println(driver.getTitle());break;}
        }
    }
}

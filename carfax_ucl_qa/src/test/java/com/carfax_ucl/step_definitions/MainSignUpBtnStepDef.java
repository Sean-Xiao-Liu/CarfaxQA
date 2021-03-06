package com.carfax_ucl.step_definitions;

import com.carfax_ucl.pages.BasePage;
import com.carfax_ucl.pages.MainSignUpPage;
import com.carfax_ucl.utilities.Driver;
import com.github.javafaker.Faker;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
public class MainSignUpBtnStepDef {

    public Faker faker=new Faker();
    public WebDriver driver= Driver.get();
    BasePage basePage=new BasePage();



    @When("I click on Sign Up button")
    public void i_click_on_Sign_Up_button() {
        driver.manage().window().maximize();
        basePage.getMainSignUpPage().signUpHeader.click();
    }
    @When("I can fill out {string} , {string}")
    public void i_can_fill_out(String email, String password)  {
        String emails=faker.name().name()+"@gmail.com";
        emails=emails.replace(" ","");

        basePage.getMainSignUpPage().email.click();
        if(emails.substring(0,emails.indexOf("@")+2).contains(".")){
            emails=emails.substring(0,emails.indexOf("@")).replace(".","")+emails.substring(emails.indexOf("@"),emails.length());

        }
        basePage.getMainSignUpPage().email.sendKeys(emails);
        basePage.getMainSignUpPage().password.click();
        basePage.getMainSignUpPage().password.sendKeys("Anna123333");
    }
    @Then("I click on Sign Up button to complete request")
    public void i_click_on_Sign_Up_button_to_complete_request() throws InterruptedException {
        basePage.getMainSignUpPage().signUpBtn.click();
        Thread.sleep(1000);
        String actualResult=driver.findElement(By.xpath("//h1[contains(@class,'sso-header')]")).getText();
        driver.navigate().back();
        String expectedMessage="Success! Please Sign In Below";
        Assert.assertEquals(expectedMessage,actualResult);
        driver.findElement(By.xpath("//img[@title='CARFAX Used Car Listings and Vehicle History']")).click();
        driver.quit();
    }
}
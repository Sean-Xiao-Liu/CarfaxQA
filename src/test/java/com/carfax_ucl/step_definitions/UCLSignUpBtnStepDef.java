package com.carfax_ucl.step_definitions;

import com.carfax_ucl.pages.BasePage;
import com.carfax_ucl.utilities.Driver;
import com.carfax_ucl.utilities.TestBase;
import com.github.javafaker.Faker;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
public class UCLSignUpBtnStepDef {
    BasePage basePage=new BasePage();
    public WebDriverWait wait=new WebDriverWait(Driver.get(),4);
    public Faker faker=new Faker();
    public WebDriver driver=Driver.get();
    TestBase testBase=new TestBase();
    @When("I click on Sign Up button from UCL")
    public void i_click_on_Sign_Up_button_from_UCL() throws InterruptedException {
        testBase.waitFor(2);
        wait.until(ExpectedConditions.elementToBeClickable(basePage.getUclSignUpPage().uclSignUpBtn)).click();
    }
    @When("I fill out email , password , {string} to create a new account")
    public void i_fill_out_email_password_to_create_a_new_account(String zipcode) {
        String emails = faker.name().name() + "@gmail.com";
        emails = emails.replace(" ", "");
        basePage.getUclSignUpPage().uclEmail.click();
        if(emails.substring(0,emails.indexOf("@")+2).contains(".")){
            emails=emails.substring(0,emails.indexOf("@")).replace(".","")+emails.substring(emails.indexOf("@"),emails.length());

        }
        basePage.getUclSignUpPage().uclEmail.sendKeys(emails);
        basePage.getUclSignUpPage().uclPassword.click();
        basePage.getUclSignUpPage().uclPassword.sendKeys("Ajskdsh1880");
        basePage.getUclSignUpPage().uclZipcode.click();
        basePage.getUclSignUpPage().uclZipcode.sendKeys(zipcode);
    }
    @Then("I click on Create account button")
    public void i_click_on_Create_account_button()  {
        wait.until(ExpectedConditions.elementToBeClickable(basePage.getUclSignUpPage().uclCreateAccount)).click();
        //todo verifying results
        String actualResult=driver.findElement(By.xpath("//span[@class='cfx-modal-complete-title']")).getText();
        String expectedResult="Your account has been created!";
        Assert.assertEquals(expectedResult,actualResult);
        //todo clicking on 'X'
        basePage.getUclSignUpPage().closeBtn.click();
        //todo logging out from account
        driver.findElement(By.xpath("//a[@id='header-logout']")).click();
        //todo clicking on 'Carfax' header-logo
        driver.findElement(By.xpath("//a[@class='header-logo']")).click();
    }


    //TODO SCENARIO #2

    @When("I fill out {string} , {string} , {string} to create a new account")
    public void i_fill_out_to_create_a_new_account(String email, String password, String zipcode) {
        basePage.getUclSignUpPage().uclEmail.click();
        basePage.getUclSignUpPage().uclEmail.sendKeys(email);
        basePage.getUclSignUpPage().uclPassword.click();
        basePage.getUclSignUpPage().uclPassword.sendKeys(password);
        basePage.getUclSignUpPage().uclZipcode.click();
        basePage.getUclSignUpPage().uclZipcode.sendKeys(zipcode);
        wait.until(ExpectedConditions.elementToBeClickable(basePage.getUclSignUpPage().uclCreateAccount)).click();


    }

    @Then("I see regular sign in page")
    public void i_see_regular_sign_in_page() {

        //todo verify that welcome back title is displayed
Assert.assertTrue(basePage.getUclSignInPage().welcomeBackTitle.isDisplayed());

    }

    @Then("I can fill out {string} , {string} and log in to account")
    public void i_can_fill_out_and_log_in_to_account(String email, String password) {
        Assert.assertTrue(basePage.getUclSignInPage().forgotPassword.isDisplayed());

        basePage.getUclSignInPage().email.click();
        basePage.getUclSignInPage().email.sendKeys(email);
        basePage.getUclSignInPage().password.click();
        basePage.getUclSignInPage().password.sendKeys(password);


        basePage.getUclSignInPage().signInBtn.click();
        testBase.waitFor(3);
        wait.until(ExpectedConditions.visibilityOf(basePage.getUclSignInPage().logout)).isDisplayed();

        //todo verify that logout element is displayed
        Assert.assertTrue(basePage.getUclSignInPage().logout.isDisplayed());

    }
}

package com.carfax_ucl.step_definitions;

import com.carfax_ucl.pages.UCLSignUpPage;
import com.carfax_ucl.utilities.Driver;
import com.github.javafaker.Faker;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.util.ArrayList;
import java.util.Arrays;
public class UCLSignUpBtnStepDef {
    public UCLSignUpPage ucl=new UCLSignUpPage();
    public WebDriverWait wait=new WebDriverWait(Driver.get(),3);
    public Faker faker=new Faker();
    public WebDriver driver=Driver.get();
    @When("I click on Sign Up button from UCL")
    public void i_click_on_Sign_Up_button_from_UCL() throws InterruptedException {
        Thread.sleep(2000);
        wait.until(ExpectedConditions.elementToBeClickable(ucl.uclSignUpBtn)).click();
    }
    @When("I fill out {string} , {string} , {string} to create a new account")
    public void i_fill_out_to_create_a_new_account(String email, String password, String zipcode) {
        String emails = faker.name().name() + "@gmail.com";
        emails = emails.replace(" ", "");
        ucl.uclEmail.click();
        ucl.uclEmail.sendKeys(emails);
        ucl.uclPassword.click();
        ucl.uclPassword.sendKeys("Ajskdsh1880");
        ucl.uclZipcode.click();
        ucl.uclZipcode.sendKeys("22204");
    }
    @Then("I click on Create account button")
    public void i_click_on_Create_account_button() throws InterruptedException {
        ucl.uclCreateAccount.click();
        Thread.sleep(1000);
        //todo verifying results
        String actualResult=driver.findElement(By.xpath("//span[@class='cfx-modal-complete-title']")).getText();
        String expectedResult="Your account has been created!";
        Assert.assertEquals(expectedResult,actualResult);
        //todo clicking on 'X'
        ucl.closeBtn.click();
        //todo logging out from account
        driver.findElement(By.xpath("//a[@id='header-logout']")).click();
        //todo clicking on 'Carfax' header-logo
        driver.findElement(By.cssSelector("g#Page-1")).click();
    }
}

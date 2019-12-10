package com.carfax_ucl.step_definitions;

import com.carfax_ucl.pages.UCLSignInPage;
import com.carfax_ucl.utilities.Driver;
import com.github.javafaker.Faker;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class UCLSignInStepDef {


    public UCLSignInPage uclSignInPage=new UCLSignInPage();
    Faker faker=new Faker();
    String email = faker.name().name() + "@mail.com";
    WebDriverWait wait=new WebDriverWait(Driver.get(),3);
    WebDriver driver=Driver.get();
    String errorMessage;


    @When("I click on Sign In button")
    public void i_click_on_Sign_In_button() throws InterruptedException {
        Thread.sleep(2000);
        wait.until(ExpectedConditions.visibilityOf(uclSignInPage.UclSignIn)).click();

    }
    @When("I can fill out email , password")
    public void i_can_fill_out_email_password() {
         email = email.replace(" ", "");
        uclSignInPage.email.click();
        uclSignInPage.email.sendKeys(email);
        uclSignInPage.password.click();
        uclSignInPage.password.sendKeys("Ajad823782");
        uclSignInPage.signInBtn.click();
    }

    @When("If i see error message")
    public void if_i_see_error_message() throws InterruptedException {
        Thread.sleep(1000);

    }
    @Then("I click on Create account option")
    public void i_click_on_Create_account_option() {
        errorMessage=driver.findElement(By.xpath("//span[contains(text(),'Your password and email do not match.')]")).getText();
        if(errorMessage.contains("password")) {
            uclSignInPage.createAccount.click();
            //  uclSignInPage.EnterEmail.click();
            // //uclSignInPage.EnterEmail.sendKeys(email);
//        //uclSignInPage.EnterPassword.sendKeys("Aslfdjs2131");
            // uclSignInPage.zipcode.click();
            // uclSignInPage.zipcode.sendKeys("22201");
            uclSignInPage.createAccountBtn.click();
        }
    }

    @Then("I click on Forgot Password button")
    public void i_click_on_Forgot_Password_button() {
        errorMessage=driver.findElement(By.xpath("//span[contains(text(),'Your password and email do not match.')]")).getText();
        if(errorMessage.contains("password")) {
            uclSignInPage.forgotPassword.click();
        }
    }

    @Then("I fill out email and click on reset password")
    public void i_fill_out_email_and_click_on_reset_password() {
        uclSignInPage.EnterEmail.click();
        uclSignInPage.EnterEmail.sendKeys(email);
        uclSignInPage.resetPassword.click();
    }

}

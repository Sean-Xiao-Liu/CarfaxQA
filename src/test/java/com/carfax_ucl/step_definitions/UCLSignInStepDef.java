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

public class UCLSignInStepDef {

BasePage basePage=new BasePage();
    Faker faker=new Faker();
    String email = faker.name().name() + "@mail.com";
    WebDriverWait wait=new WebDriverWait(Driver.get(),3);
    WebDriver driver=Driver.get();
    String errorMessage;
    public TestBase testBase=new TestBase();


    @When("I click on Sign In button")
    public void i_click_on_Sign_In_button()  {
        testBase.waitFor(2);

        wait.until(ExpectedConditions.visibilityOf(basePage.getUclSignInPage().UclSignIn)).click();

    }
    @When("I can fill out email , password")
    public void i_can_fill_out_email_password() {
         email = email.replace(" ", "");
        basePage.getUclSignInPage().email.click();
        if(email.substring(0,email.indexOf("@")+2).contains(".")){
            email=email.substring(0,email.indexOf("@")).replace(".","")+email.substring(email.indexOf("@"),email.length());

        }

        basePage.getUclSignInPage().email.sendKeys(email);
        basePage.getUclSignInPage().password.click();
        basePage.getUclSignInPage().password.sendKeys("Ajad823782");
        basePage.getUclSignInPage().signInBtn.click();
    }

    @When("If i see error message")
    public void if_i_see_error_message() {
        testBase.waitFor(1);

    }
    @Then("I click on Create account option")
    public void i_click_on_Create_account_option() {
        errorMessage=driver.findElement(By.xpath("//span[contains(text(),'Your password and email do not match.')]")).getText();
        if(errorMessage.contains("password")) {
            basePage.getUclSignInPage().createAccount.click();
            basePage.getUclSignInPage().createAccountBtn.click();
        }
    }

    @Then("I click on Forgot Password button")
    public void i_click_on_Forgot_Password_button() {
        errorMessage=driver.findElement(By.xpath("//span[contains(text(),'Your password and email do not match.')]")).getText();
        if(errorMessage.contains("password")) {
            basePage.getUclSignInPage().forgotPassword.click();
        }
    }

    @Then("I fill out email and click on reset password")
    public void i_fill_out_email_and_click_on_reset_password()  {
        basePage.getUclSignInPage().EnterEmail.click();
        basePage.getUclSignInPage().EnterEmail.sendKeys(email);
        basePage.getUclSignInPage().resetPassword.click();
        testBase.waitFor(5);
//todo verify that element is displayed
        Assert.assertEquals(driver.findElement(By.xpath("//span[@class='form-transaction-msg error']")).getText(),"Oops! We couldn't find that e-mail.");
    }

}

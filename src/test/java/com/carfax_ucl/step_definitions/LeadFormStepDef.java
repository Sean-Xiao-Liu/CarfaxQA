package com.carfax_ucl.step_definitions;

import com.carfax_ucl.pages.BasePage;
import com.carfax_ucl.utilities.Driver;
import com.github.javafaker.Faker;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.Set;

public class LeadFormStepDef {

    public BasePage basePage=new BasePage();
public WebDriver driver= Driver.get();
public Faker faker=new Faker();
    public WebDriverWait wait=new WebDriverWait(Driver.get(),3);


    @When("I click on particular car that I want")
    public void i_click_on_particular_car_that_I_want() {
        int numberOfCar = 2;
        WebElement headerOfCar = driver.findElement(By.xpath("(//span[@class='srp-list-item-basic-info-model'])[" + numberOfCar + "]"));
        numberOfCar++;
        headerOfCar.click();
    }
//todo Scenario #1
    @When("I navigate to Lead Form and fill out First Name, Last Name, {string} and Phone number")
    public void i_navigate_to_Lead_Form_and_fill_out_First_Name_Last_Name_and_Phone_number(String zipCode) {

    Set<String> windows = driver.getWindowHandles();
        for(String window : windows){
            if(driver.switchTo().window(window).getCurrentUrl().contains("vehicle")) {
                System.out.println(driver.getTitle());break;}
        }
        //todo scrolling down to element
        WebElement length=driver.findElement(By.xpath("//*[@id=\"react-app\"]/div/div[1]/div[2]/div[1]/section[3]/div/div[2]/div[1]/div[2]/div/div[1]/div/span[1]"));
        JavascriptExecutor jse = (JavascriptExecutor)driver;
        jse.executeScript("arguments[0].scrollIntoView(true);",length);
        //todo input for Lead Form
        //todo Positive scenario :
        wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.xpath("(//i[@class='fa fa-mobile'])[4]"))));

        basePage.getLeadFormPage().firstName.click();
        basePage.getLeadFormPage().firstName.sendKeys("Test");
        basePage.getLeadFormPage().lastName.click();
        basePage.getLeadFormPage().lastName.sendKeys("test");

        // Thread.sleep(2000);
        System.out.println(basePage.getLeadFormPage().zipCode.getAttribute("value"));

        //Thread.sleep(100);
        for(int i =0;i<6;i++){
            // Thread.sleep(1000);
            basePage.getLeadFormPage().zipCode.click();
            basePage.getLeadFormPage().zipCode.sendKeys(Keys.BACK_SPACE);

        }


            basePage.getLeadFormPage().zipCode.click();
            basePage.getLeadFormPage().zipCode.sendKeys(zipCode);


        basePage.getLeadFormPage().isThisVehicleAvailable.click();
        basePage.getLeadFormPage().whatPaymentTermsAreAvailable.click();
        basePage.getLeadFormPage().whenCanITestDriveThisVehicle.click();
        basePage.getLeadFormPage().personalNote.click();
        basePage.getLeadFormPage().noteField.click();
        basePage.getLeadFormPage().noteField.sendKeys("Test QA");
        basePage.getLeadFormPage().phoneNumber.sendKeys("5555555555");
    }
//todo Scenario #2 DONE
@When("I navigate to Lead Form and fill out First Name, Last Name, {string} , email")
public void i_navigate_to_Lead_Form_and_fill_out_First_Name_Last_Name_email(String zipCode) {

        String email = faker.name().name() + "@mail.com";
        email = email.replace(" ", "");

        Set<String> windows = driver.getWindowHandles();
        for(String window : windows){
            if(driver.switchTo().window(window).getCurrentUrl().contains("vehicle")) {
                System.out.println(driver.getTitle());break;}
        }
        //todo scrolling down to element
        WebElement length=driver.findElement(By.xpath("//*[@id=\"react-app\"]/div/div[1]/div[2]/div[1]/section[3]/div/div[2]/div[1]/div[2]/div/div[1]/div/span[1]"));
        JavascriptExecutor jse = (JavascriptExecutor)driver;
        jse.executeScript("arguments[0].scrollIntoView(true);",length);
        //todo input for Lead Form
        //todo Positive scenario :
        wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.xpath("(//i[@class='fa fa-mobile'])[4]"))));

        basePage.getLeadFormPage().firstName.click();
        basePage.getLeadFormPage().firstName.sendKeys("Test");
        basePage.getLeadFormPage().lastName.click();
        basePage.getLeadFormPage().lastName.sendKeys("test");

        // Thread.sleep(2000);
        System.out.println(basePage.getLeadFormPage().zipCode.getAttribute("value"));

        //Thread.sleep(100);
        for(int i =0;i<6;i++){
            // Thread.sleep(1000);
            basePage.getLeadFormPage().zipCode.click();
            basePage.getLeadFormPage().zipCode.sendKeys(Keys.BACK_SPACE);

        }

//        if(basePage.getLeadFormPage().zipCode.getText().isEmpty()) {
            basePage.getLeadFormPage().zipCode.click();
            basePage.getLeadFormPage().zipCode.sendKeys(zipCode);


        basePage.getLeadFormPage().email.sendKeys(email);
    }


    @Then("I click on Send Message to that dealer")
    public void i_click_on_Send_Message_to_that_dealer() throws InterruptedException {
        basePage.getLeadFormPage().sendMessage.click();
        //Thread.sleep(2000);

            Assert.assertEquals(driver.findElement(By.xpath("(//span[contains(text(),'Your message was sent!')])[2]")).getText()
                    , "Your message was sent!");
      Assert.assertTrue(driver.findElement(By.xpath("(//a[contains(text(),'View Dealer Inventory')])[2]")).isDisplayed());
    }
//TODO SCENARIO #3
    @When("I navigate to Lead Form and cleaning zipcode which is by default already filled out")
    public void i_navigate_to_Lead_Form_and_cleaning_zipcode_which_is_by_default_already_filled_out() throws InterruptedException {

        Set<String> windows = driver.getWindowHandles();
        for(String window : windows){
            if(driver.switchTo().window(window).getCurrentUrl().contains("vehicle")) {
                System.out.println(driver.getTitle());break;}
        }
        //todo scrolling down to element
        WebElement length=driver.findElement(By.xpath("//*[@id=\"react-app\"]/div/div[1]/div[2]/div[1]/section[3]/div/div[2]/div[1]/div[2]/div/div[1]/div/span[1]"));
        JavascriptExecutor jse = (JavascriptExecutor)driver;
        jse.executeScript("arguments[0].scrollIntoView(true);",length);
        wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.xpath("(//i[@class='fa fa-mobile'])[4]"))));

        for(int i =0;i<6;i++){
            // Thread.sleep(1000);
            basePage.getLeadFormPage().zipCode.click();
            basePage.getLeadFormPage().zipCode.sendKeys(Keys.BACK_SPACE);
            Thread.sleep(100);
        }
    }

    @Then("I click on Send Message to that dealer and should see error messages are displayed")
    public void i_click_on_Send_Message_to_that_dealer_and_should_see_error_messages_are_displayed() {

        basePage.getLeadFormPage().sendMessage.click();
        basePage.getLeadFormPage().sendMessage.click();

        //todo ERROR MESSAGE FOR FIRST NAME IS SHOWED
        Assert.assertTrue(driver.findElement(By.xpath("//li[contains(text(),'First name is required!')]")).isDisplayed());

        //todo ERROR MESSAGE FOR LAST NAME IS SHOWED
        Assert.assertTrue(driver.findElement(By.xpath("//li[contains(text(),'Last name is required!')]")).isDisplayed());

        //todo ERROR MESSAGE FOR ZIP CODE IS SHOWED

        Assert.assertTrue(driver.findElement(By.xpath("//li[contains(text(),'Zip is required!')]")).isDisplayed());

        //todo ERROR MESSAGE FOR EMAIL OR PHONE IS SHOWED

        Assert.assertTrue(driver.findElement(By.xpath("//li[contains(text(),'Email or Phone is required!')]")).isDisplayed());

    }
//TODO SCENARIO #4
@When("I navigate to Lead Form and fill out First Name,  {string} and Phone number")
public void i_navigate_to_Lead_Form_and_fill_out_First_Name_and_Phone_number(String zipCode) {

        Set<String> windows = driver.getWindowHandles();
        for(String window : windows){
            if(driver.switchTo().window(window).getCurrentUrl().contains("vehicle")) {
                System.out.println(driver.getTitle());break;}
        }
        //todo scrolling down to element
        WebElement length=driver.findElement(By.xpath("//*[@id=\"react-app\"]/div/div[1]/div[2]/div[1]/section[3]/div/div[2]/div[1]/div[2]/div/div[1]/div/span[1]"));
        JavascriptExecutor jse = (JavascriptExecutor)driver;
        jse.executeScript("arguments[0].scrollIntoView(true);",length);
        wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.xpath("(//i[@class='fa fa-mobile'])[4]"))));

        basePage.getLeadFormPage().firstName.click();
        basePage.getLeadFormPage().firstName.sendKeys("Test");
        System.out.println(basePage.getLeadFormPage().zipCode.getAttribute("value"));

        //Thread.sleep(100);
        for(int i =0;i<6;i++){
            // Thread.sleep(1000);
            basePage.getLeadFormPage().zipCode.click();
            basePage.getLeadFormPage().zipCode.sendKeys(Keys.BACK_SPACE);

        }


            basePage.getLeadFormPage().zipCode.click();
            basePage.getLeadFormPage().zipCode.sendKeys(zipCode);


        basePage.getLeadFormPage().phoneNumber.sendKeys("5555555555");
    }
    @Then("I click on Send Message to that dealer and should see Last Name error message are displayed")
    public void i_click_on_Send_Message_to_that_dealer_and_should_see_Last_Name_error_message_are_displayed() {
        basePage.getLeadFormPage().sendMessage.click();

        Assert.assertTrue(driver.findElement(By.xpath("//li[contains(text(),'Last name is required!')]")).isDisplayed());
    }

    //TODO SCENARIO #5

    @When("I navigate to Lead Form and fill out Last Name,  {string} and Phone number")
    public void i_navigate_to_Lead_Form_and_fill_out_Last_Name_and_Phone_number(String zipCode) {

        Set<String> windows = driver.getWindowHandles();
        for(String window : windows){
            if(driver.switchTo().window(window).getCurrentUrl().contains("vehicle")) {
                System.out.println(driver.getTitle());break;}
        }
        //todo scrolling down to element
        WebElement length=driver.findElement(By.xpath("//*[@id=\"react-app\"]/div/div[1]/div[2]/div[1]/section[3]/div/div[2]/div[1]/div[2]/div/div[1]/div/span[1]"));
        JavascriptExecutor jse = (JavascriptExecutor)driver;
        jse.executeScript("arguments[0].scrollIntoView(true);",length);
        wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.xpath("(//i[@class='fa fa-mobile'])[4]"))));

        basePage.getLeadFormPage().lastName.click();
        basePage.getLeadFormPage().lastName.sendKeys("Test");
        System.out.println(basePage.getLeadFormPage().zipCode.getAttribute("value"));

        //Thread.sleep(100);
        for(int i =0;i<6;i++){
            // Thread.sleep(1000);
            basePage.getLeadFormPage().zipCode.click();
            basePage.getLeadFormPage().zipCode.sendKeys(Keys.BACK_SPACE);

        }


            basePage.getLeadFormPage().zipCode.click();
            basePage.getLeadFormPage().zipCode.sendKeys(zipCode);


        basePage.getLeadFormPage().phoneNumber.sendKeys("5555555555");
    }

    @Then("I click on Send Message to that dealer and should see First Name error message are displayed")
    public void i_click_on_Send_Message_to_that_dealer_and_should_see_First_Name_error_message_are_displayed() {
        basePage.getLeadFormPage().sendMessage.click();

        Assert.assertTrue(driver.findElement(By.xpath("//li[contains(text(),'First name is required!')]")).isDisplayed());
    }

    //TODO SCENARIO #6

    @When("I navigate to Lead Form and fill out First Name,  Last name and Phone number")
    public void i_navigate_to_Lead_Form_and_fill_out_First_Name_Last_name_and_Phone_number() {
        Set<String> windows = driver.getWindowHandles();
        for(String window : windows){
            if(driver.switchTo().window(window).getCurrentUrl().contains("vehicle")) {
                System.out.println(driver.getTitle());break;}
        }


        //todo scrolling down to element
        WebElement length=driver.findElement(By.xpath("//*[@id=\"react-app\"]/div/div[1]/div[2]/div[1]/section[3]/div/div[2]/div[1]/div[2]/div/div[1]/div/span[1]"));
        JavascriptExecutor jse = (JavascriptExecutor)driver;
        jse.executeScript("arguments[0].scrollIntoView(true);",length);

wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.xpath("(//i[@class='fa fa-mobile'])[4]"))));
        basePage.getLeadFormPage().firstName.click();
        basePage.getLeadFormPage().firstName.sendKeys("Test");
        basePage.getLeadFormPage().lastName.click();
        basePage.getLeadFormPage().lastName.sendKeys("Test");
        System.out.println(basePage.getLeadFormPage().zipCode.getAttribute("value"));

        //Thread.sleep(100);
        for(int i =0;i<6;i++){
            // Thread.sleep(1000);
            basePage.getLeadFormPage().zipCode.click();
            basePage.getLeadFormPage().zipCode.sendKeys(Keys.BACK_SPACE);

        }

        basePage.getLeadFormPage().phoneNumber.sendKeys("5555555555");

    }

    @Then("I click on Send Message to that dealer and should see Zip code error message are displayed")
    public void i_click_on_Send_Message_to_that_dealer_and_should_see_Zip_code_error_message_are_displayed() {
        basePage.getLeadFormPage().sendMessage.click();
        System.out.println(driver.findElement(By.cssSelector("span.checkbox-list-item--text")).getAttribute("value"));

        Assert.assertTrue(driver.findElement(By.xpath("//li[contains(text(),'Zip is required!')]")).isDisplayed());
    }



}

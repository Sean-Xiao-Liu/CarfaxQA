package com.carfax_ucl.step_definitions;

import com.carfax_ucl.pages.vdpSaveThisSearchPage;
import com.carfax_ucl.utilities.ConfigurationReader;
import com.carfax_ucl.utilities.Driver;
import com.github.javafaker.Faker;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.util.List;
import java.util.concurrent.TimeUnit;


public class SaveThisSearchStepDef {


    public vdpSaveThisSearchPage vdp=new vdpSaveThisSearchPage();
    public WebDriverWait wait=new WebDriverWait(Driver.get(),4);
    public WebDriver driver=Driver.get();
    public Faker faker=new Faker();
    public Actions actions=new Actions(driver);





    @Given("I am on main Carfax page")
    public void i_am_on_main_Carfax_page() {
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        driver.get(ConfigurationReader.get("url"));
    }
    @Given("I navigate to Find a Used Car page")
    public void i_navigate_to_Find_a_Used_Car_page() {
        wait.until(ExpectedConditions.elementToBeClickable(vdp.findAUsedCarBtn)).click();
    }
    @Given("I fill out {string} , {string} , {string} of the car that I want to search")
    public void i_fill_out_of_the_car_that_I_want_to_search(String make, String modelStr, String zipcode) throws InterruptedException {
        // todo clicking on 'Select Make' dropdown
        driver.findElement(By.xpath("(//select[contains(@class,'form-control')])[1]")).click();
        List<WebElement> listOfMakes = driver.findElements(By.xpath("//option[contains(@id,'make_')]"));
        Thread.sleep(1000);
        int makeNumber=1;
        wait.until(ExpectedConditions.elementToBeClickable(listOfMakes.get(makeNumber))).click();
        listOfMakes.get(1).click();
        //actions.doubleClick(listOfMakes.get(makeNumber)).build().perform();
        int model=1;
        WebElement modelOfCar=driver.findElement(By.xpath("(//optgroup/option[contains(@id,'model_')])[" +model+"]"));
        model++;
        //todo clicking on 'Select model' dropdown
        wait.until(ExpectedConditions.elementToBeClickable(
                driver.findElement(By.cssSelector("select[class='form-control search-model ']")))).click();

        modelOfCar.click();
      //  actions.doubleClick(modelOfCar).build().perform();
        zipcode="22204";
        //todo clicking on 'Zipcode'
       vdp.zipCodeMainPage.click();
        vdp.zipCodeMainPage.sendKeys(zipcode);
    }
    @When("I click on next and show me results button")
    public void i_click_on_next_and_show_me_results_button() throws InterruptedException {
        vdp.submitBtn.click();
        Thread.sleep(1000);
        //todo clicking on 'Show me  Results'
        vdp.showMeBtn.click();
        Thread.sleep(1000);
    }
    @When("I click on  Save This Search button")
    public void i_click_on_Save_This_Search_button() {
        vdp.saveThisSearchMainPage.click();
    }
    @Then("I am able to fill out {string} , {string} and click on save This Search button")
    public void i_am_able_to_fill_out_and_click_on_save_This_Search_button(String string, String string2) throws InterruptedException {
        String email=faker.name().name()+"@mail.com";
        email=email.replace(" ","");
        wait.until(ExpectedConditions.visibilityOf(vdp.emailAddress)).click();
        vdp.emailAddress.sendKeys(email);
        wait.until(ExpectedConditions.visibilityOf(vdp.zipCodeSaveSearchPage)).click();
        vdp.zipCodeSaveSearchPage.sendKeys("22012");
        vdp.saveThisSearchBtn.click();
        vdp.password.click();
        vdp.password.sendKeys("Anna12399");
        vdp.savePasswordBtn.click();
        //todo logging out from account
        Thread.sleep(1000);
        driver.findElement(By.xpath("//a[@id='header-logout']")).click();
        //todo clicking on carfax header on upper left side
        driver.findElement(By.xpath("//span[contains(text(),'Home')]")).click();
        //driver.findElement(By.cssSelector("g[id='Page-1']")).click();
        driver.quit();
    }
}

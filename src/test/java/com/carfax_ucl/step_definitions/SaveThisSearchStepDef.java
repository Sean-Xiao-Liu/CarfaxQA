package com.carfax_ucl.step_definitions;

import com.carfax_ucl.pages.BasePage;
import com.carfax_ucl.utilities.Driver;
import com.github.javafaker.Faker;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.util.List;
import java.util.TreeMap;
import java.util.concurrent.TimeUnit;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static org.junit.Assert.*;


public class SaveThisSearchStepDef {


    BasePage basePage = new BasePage();
    public WebDriverWait wait=new WebDriverWait(Driver.get(),5);
    public WebDriver driver=Driver.get();
    public Faker faker=new Faker();





    @Given("I am on main Carfax page")
    public void i_am_on_main_Carfax_page() {
 driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
      assertEquals("CARFAX™ - Shop, Buy, Own, & Sell Used Cars",driver.getTitle());

    }
    @Given("I navigate to Find a Used Car page")
    public void i_navigate_to_Find_a_Used_Car_page() throws InterruptedException {
        wait.until(ExpectedConditions.elementToBeClickable(basePage.getVdp().findAUsedCarBtn)).click();
        wait.until(ExpectedConditions.urlContains("cars-for-sale"));
        System.out.println(driver.getTitle());
        Thread.sleep(200);
        assertEquals("Used Cars for Sale | with Free CARFAX",driver.getTitle());
    }
    @Given("I fill out {string} , {string} , {string} of the car that I want to search")
    public void i_fill_out_of_the_car_that_I_want_to_search(String make, String model, String zipcode) throws InterruptedException {
        // todo clicking on 'Select Make' dropdown

        //driver.findElement(By.xpath("(//select[contains(@class,'form-control')])[1]")).click();
        Thread.sleep(2000);
       List <WebElement> makes =driver.findElements(By.xpath("//select[@name='make']/optgroup[@label='Popular Makes']/option"));
       for(WebElement temp :makes){
           if(temp.getText().trim().equals(make)){
               temp.click();
               break;
           }

        }
       Thread.sleep(2000);
       //wait.until(ExpectedConditions.elementToBeClickable(driver.findElement(By.xpath("//select[@name='model']/optgroup[@label='Current Models']"))));
        List <WebElement> models =driver.findElements(By.xpath("//select[@name='model']/optgroup[@label='Current Models']/option"));
        System.out.println("models = " + models.size());
        for(WebElement temp :models){
            if(temp.getText().trim().equals(model)){
                temp.click();
                break;
            }

        }


        //todo clicking on 'Zipcode'
       basePage.getVdp().zipCodeMainPage.click();
        basePage.getVdp().zipCodeMainPage.sendKeys(zipcode);
    }
    @When("I click on next and show me results button")
    public void i_click_on_next_and_show_me_results_button() throws InterruptedException {
        basePage.getVdp().submitBtn.click();

        wait.until(ExpectedConditions.textMatches((By.xpath("//span[@class='totalRecordsText']")), Pattern.compile("[1-9]")));
        //todo clicking on 'Show me  Results'
        basePage.getVdp().showMeBtn.click();
    }
    @When("I click on  Save This Search button")
    public void i_click_on_Save_This_Search_button() throws InterruptedException {
        Thread.sleep(2000);
        basePage.getVdp().saveThisSearchMainPage.click();
    }
    @Then("I am able to fill out email , zip code and click on save This Search button")
    public void i_am_able_to_fill_out_email_zip_code_and_click_on_save_This_Search_button()  throws InterruptedException {
        String email=faker.name().name()+"@mail.com";
        email=email.replace(" ","");

        wait.until(ExpectedConditions.visibilityOf(basePage.getVdp().emailAddress)).click();
        if(email.substring(0,email.indexOf("@")+2).contains(".")){
            email=email.substring(0,email.indexOf("@")).replace(".","")+email.substring(email.indexOf("@"),email.length());

        }
        basePage.getVdp().emailAddress.sendKeys(email);
        wait.until(ExpectedConditions.visibilityOf( basePage.getVdp().zipCodeSaveSearchPage)).click();
        basePage.getVdp().zipCodeSaveSearchPage.sendKeys("22012");
        basePage.getVdp().saveThisSearchBtn.click();
        basePage.getVdp().password.click();
        basePage.getVdp().password.sendKeys("Anna12399");
        basePage.getVdp().savePasswordBtn.click();
        //todo logging out from account
        Thread.sleep(1000);
        driver.findElement(By.xpath("//a[@id='header-logout']")).click();
        //todo clicking on carfax header on upper left side
        driver.findElement(By.xpath("//span[contains(text(),'Home')]")).click();
        //driver.findElement(By.cssSelector("g[id='Page-1']")).click();
        driver.quit();
    }


    //TODO SCENARIO #2

    @Given("I fill out {string} ,  {string} of the car that I want to search")
    public void i_fill_out_of_the_car_that_I_want_to_search(String make, String zipcode) throws InterruptedException {
        Thread.sleep(2000);
        List <WebElement> makes =driver.findElements(By.xpath("//select[@name='make']/optgroup[@label='Popular Makes']/option"));
        for(WebElement temp :makes){
            if(temp.getText().trim().equals(make)){
                temp.click();
                break;
            }

        }

        basePage.getVdp().zipCodeMainPage.click();
        basePage.getVdp().zipCodeMainPage.sendKeys(zipcode);







    }

    @Then("I can see that Save Search button is not able to click")
    public void i_can_see_that_Save_Search_button_is_not_able_to_click() {

wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.id("srpHeading")))).isDisplayed();
        Assert.assertTrue(!basePage.getVdp().saveThisSearchMainPage.isEnabled());
        System.out.println(!basePage.getVdp().saveThisSearchMainPage.isEnabled());

    }


    //TODO SCENARIO #3 WITH BODY TYPE OR PRICE RANGE

    @Given("I click on Body Type or Price filter")
    public void i_click_on_Body_Type_or_Price_filter() {
basePage.getBodyTypeOrPricePage().bodyTypeOrPrice.click();



    }

    @When("I fill out {string} , {string}  , {string} of the car I want to search")
    public void i_fill_out_of_the_car_I_want_to_search(String bodyType, String priceRange, String zipcode) {
        List <WebElement> bodyTypeDropDown =driver.findElements(By.xpath("//select[@class='form-control search-bodystyle']/option"));
        for(WebElement temp :bodyTypeDropDown){
            if(temp.getText().trim().equals(bodyType)){
                temp.click();
                break;
            }

        }

        List <WebElement> priceRangeDropDown =driver.findElements(By.xpath("//select[@class='form-control search-price']/option"));
        for(WebElement temp :priceRangeDropDown){
            if(temp.getText().trim().equals(priceRange)){
                temp.click();
                break;
            }

        }

        basePage.getBodyTypeOrPricePage().zipCode.click();
        basePage.getBodyTypeOrPricePage().zipCode.sendKeys(zipcode);

    }

    @When("I click on next and show me results button from Body type side")
    public void i_click_on_next_and_show_me_results_button_from_Body_type_side() {
        basePage.getBodyTypeOrPricePage().nextBtn.click();
        wait.until(ExpectedConditions.textMatches((By.xpath("//span[@class='totalRecordsText']")), Pattern.compile("[1-9]")));

        basePage.getBodyTypeOrPricePage().showMeBtn.click();
    }

}

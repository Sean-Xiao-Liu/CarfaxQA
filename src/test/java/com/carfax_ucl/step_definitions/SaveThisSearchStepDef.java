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
import java.util.concurrent.TimeUnit;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static org.junit.Assert.*;


public class SaveThisSearchStepDef {


    BasePage basePage = new BasePage();
    public WebDriverWait wait=new WebDriverWait(Driver.get(),5);
    public WebDriver driver=Driver.get();
    public Faker faker=new Faker();
    public Actions actions=new Actions(driver);





    @Given("I am on main Carfax page")
    public void i_am_on_main_Carfax_page() {
//        driver.manage().window().maximize();
 driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
       // driver.get(ConfigurationReader.get("url"));
      assertEquals("CARFAX™ - Shop, Buy, Own, & Sell Used Cars",driver.getTitle());

    }
    @Given("I navigate to Find a Used Car page")
    public void i_navigate_to_Find_a_Used_Car_page() {
        wait.until(ExpectedConditions.elementToBeClickable(basePage.getVdp().findAUsedCarBtn)).click();
        wait.until(ExpectedConditions.urlContains("cars-for-sale"));
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


//        driver.findElement(By.xpath("(//select[contains(@class,'form-control')])[1]")).click();
//       List<WebElement> listOfMakes = driver.findElements(By.xpath("//option[contains(@id,'make_')]"));
//        Thread.sleep(1000);
//        int makeNumber=1;
//        wait.until(ExpectedConditions.elementToBeClickable(listOfMakes.get(makeNumber))).click();
//        for(WebElement element : listOfMakes) {
//            if(element.getText().equals("make")){
//                element.click();
//            }
           // listOfMakes.get(1).click();
//        }
        //actions.doubleClick(listOfMakes.get(makeNumber)).build().perform();
//        int model=1;
//        WebElement modelOfCar=driver.findElement(By.xpath("(//optgroup/option[contains(@id,'model_')])[" +model+"]"));
//        model++;
//        //todo clicking on 'Select model' dropdown
//        wait.until(ExpectedConditions.elementToBeClickable(
//                driver.findElement(By.cssSelector("select[class='form-control search-model ']")))).click();
//
//        modelOfCar.click();
      //  actions.doubleClick(modelOfCar).build().perform();
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
}

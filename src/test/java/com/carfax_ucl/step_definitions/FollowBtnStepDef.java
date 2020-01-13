package com.carfax_ucl.step_definitions;

import com.carfax_ucl.pages.BasePage;
import com.carfax_ucl.utilities.Driver;
import com.github.javafaker.Faker;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.regex.Pattern;

public class FollowBtnStepDef {
    WebDriverWait wait=new WebDriverWait(Driver.get(),2);
    Faker faker=new Faker();
    public WebDriver driver= Driver.get();
    BasePage basePage=new BasePage();


    @When("I click on next and show me results button  show me results button")
    public void i_click_on_next_and_show_me_results_button_show_me_results_button() throws InterruptedException {
        basePage.getFollowBtnPage().submitBtn.click();
        wait.until(ExpectedConditions.textMatches((By.xpath("//span[@class='totalRecordsText']")), Pattern.compile("[1-9]")));
        //todo clicking on 'Show me  Results'
        basePage.getVdp().showMeBtn.click();

    }
    @When("I click on follow button to follow car")
    public void i_click_on_follow_button_to_follow_car() throws InterruptedException{
        Thread.sleep(2000);
        wait.until(ExpectedConditions.elementToBeClickable(basePage.getFollowBtnPage().FollowBtn)).click();
    }
    @Then("I can create an account")
    public void i_can_create_an_account() throws InterruptedException {
        String email = faker.name().name() + "@mail.com";
        email = email.replace(" ", "");
       // try {
        basePage.getFollowBtnPage().email.click();
        basePage.getFollowBtnPage().email.sendKeys(email);
            Thread.sleep(500);
        basePage.getFollowBtnPage().zipCode.click();
        basePage.getFollowBtnPage().zipCode.sendKeys("22204");
        basePage.getFollowBtnPage().startFollowingBtn.click();
            Thread.sleep(1000);
        basePage.getFollowBtnPage().password.click();
        basePage.getFollowBtnPage().password.sendKeys("hdjfdsA1155");
        basePage.getFollowBtnPage().savePasswordBtn.click();
       // }catch (WebDriverException e){
            System.out.println("Exception catch");
//        } catch (InterruptedException e) {
//            e.printStackTrace();
        //}
        Thread.sleep(1000);
        wait.until(ExpectedConditions.elementToBeClickable(driver.findElement(By.xpath("//a[@class='signout show'][@id='header-logout']")))).click();
    }



}
package com.carfax_ucl.step_definitions;

import com.carfax_ucl.pages.FollowBtnPage;
import com.carfax_ucl.utilities.Driver;
import com.github.javafaker.Faker;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
public class FollowBtnStepDef {
    FollowBtnPage followBtnPage=new FollowBtnPage();
    WebDriverWait wait=new WebDriverWait(Driver.get(),1);
    Faker faker=new Faker();
    public WebDriver driver= Driver.get();


    @When("I click on next and show me results button  show me results button")
    public void i_click_on_next_and_show_me_results_button_show_me_results_button() throws InterruptedException {
        followBtnPage.submitBtn.click();
        Thread.sleep(1000);
        wait.until(ExpectedConditions.elementToBeClickable(followBtnPage.showMeBtn)).click();

    }
    @When("I click on follow button to follow car")
    public void i_click_on_follow_button_to_follow_car() throws InterruptedException{
        Thread.sleep(2000);
        wait.until(ExpectedConditions.elementToBeClickable(followBtnPage.FollowBtn)).click();
    }
    @Then("I can create an account")
    public void i_can_create_an_account() throws InterruptedException {
        String email = faker.name().name() + "@mail.com";
        email = email.replace(" ", "");
       // try {
            followBtnPage.email.click();
            followBtnPage.email.sendKeys(email);
            Thread.sleep(500);
            followBtnPage.zipCode.click();
            followBtnPage.zipCode.sendKeys("22204");
            followBtnPage.startFollowingBtn.click();
            Thread.sleep(1000);
            followBtnPage.password.click();
            followBtnPage.password.sendKeys("hdjfdsA1155");
            followBtnPage.savePasswordBtn.click();
       // }catch (WebDriverException e){
            System.out.println("Exception catch");
//        } catch (InterruptedException e) {
//            e.printStackTrace();
        //}
        Thread.sleep(1000);
        wait.until(ExpectedConditions.elementToBeClickable(driver.findElement(By.xpath("//a[@class='signout show'][@id='header-logout']")))).click();
    }
}
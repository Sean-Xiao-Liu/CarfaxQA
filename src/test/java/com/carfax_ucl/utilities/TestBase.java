package com.carfax_ucl.utilities;

import com.carfax_ucl.pages.BasePage;
import com.carfax_ucl.pages.LeadFormPage;
import com.github.javafaker.Faker;
import org.junit.Assert;
import org.junit.Test;
import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public  class TestBase {
    public static WebDriver driver=Driver.get();
    public static Actions actions=new Actions(driver);
    public Faker faker=new Faker();
    public WebDriverWait wait=new WebDriverWait(Driver.get(),3);




/**
 *
 * Using for checking or unchecking checkboxes

 */
    public static void selectCheckBox(WebElement element, boolean check){
        if(check){
            if(!element.isSelected()){
                element.click();
            }
        }else{
            if(element.isSelected()){
                element.click();
            }
        }
    }


    /**
     * SendToMyPhone method
     * @throws InterruptedException
     */

    public void sendToMyPhone() throws InterruptedException {

        BasePage basePage=new BasePage();
        //todo window handles for VDP
        Set<String> windows = driver.getWindowHandles();
        for(String window : windows){
            if(driver.switchTo().window(window).getCurrentUrl().contains("vehicle")) {
                System.out.println(driver.getTitle());break;} }



        //todo clicking on send to my phone btn

        wait.until(ExpectedConditions.elementToBeClickable(basePage.getSendToMyPhone().sendToMyPhoneHeader)).click();
        basePage.getSendToMyPhone().enterYourMobilePhone.click();
        basePage.getSendToMyPhone().enterYourMobilePhone.sendKeys("5555555555");
        wait.until(ExpectedConditions.elementToBeClickable(basePage.getSendToMyPhone().sendBtn)).click();
        Thread.sleep(2000);
        Assert.assertTrue(driver.findElement(By.xpath("//p[@class='cfx-modal-complete-title']")).isDisplayed());



    }

    /**
     * shareHeader method
     */
    public void shareHeader(){


        //todo window handles for VDP
        Set<String> windows = driver.getWindowHandles();
        for(String window : windows){
            if(driver.switchTo().window(window).getCurrentUrl().contains("vehicle")) {
                System.out.println(driver.getTitle());break;}
        }

        String email = faker.name().name() + "@mail.com";
        email = email.replace(" ", "");
        BasePage basePage=new BasePage();
wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.xpath("(//i[@class='fa fa-envelope'])[1]"))));
        wait.until(ExpectedConditions.elementToBeClickable(basePage.getShareHeader().shareHeader)).click();
        basePage.getShareHeader().fromEmail.click();
        basePage.getShareHeader().fromEmail.sendKeys(email);
        basePage.getShareHeader().toEmail.click();
        basePage.getShareHeader().toEmail.sendKeys(email);
        basePage.getShareHeader().addPersonalNote.click();
        basePage.getShareHeader().messageNote.click();
        basePage.getShareHeader().messageNote.sendKeys("Hello");
        basePage.getShareHeader().sendBtn.click();

    }

    /**
     * Highllights an element by changing backrounds and border color
     *
     */

    public  void highlight(WebElement element){
        ((JavascriptExecutor)Driver.get()).executeScript("arguments[0].setAttribute('style', 'background: yellow; border: 2px solid red;');",element);
        ((JavascriptExecutor)Driver.get()).executeScript("arguments[0].removeAttribute('style', 'background: yellow; border: 2px solid red;');",element);

    }

    /**
     * Scrolls down to particular element using JavaScriptExecutor
     * @param element
     */

    public  void scrollToElement(WebElement element){
        ((JavascriptExecutor)Driver.get()).executeScript("arguments[0].scrollIntoView(true);",element);
    }

    /**
     * Clicks on an element using JS
     * @param element
     */
    public  void clickWithJS(WebElement element){
        ((JavascriptExecutor)Driver.get()).executeScript("arguments[0].scrollIntoView(true);",element);
        ((JavascriptExecutor)Driver.get()).executeScript("arguments[0].click();",element);
    }


    /**
     * Waits for element to be not stale
     * @param element
     */
    public void waitForStaleElement(WebElement element){
        int x=0;
        while (x<=15){
            if(x==1)
                try{
                    element.isDisplayed();
                    break;
                }catch(StaleElementReferenceException st){
                    x++;
                    try{
                        Thread.sleep(300);
                    }catch (InterruptedException e){
                        e.printStackTrace();
                    }
                }catch (WebDriverException we){
                    x++;
                    try {
                        Thread.sleep(300);
                    }catch (InterruptedException e){
                        e.printStackTrace();
                    }
                }
        }
}

    /**
     * Perform a pause
     * @param seconds
     */
    public void waitFor(int seconds) {
        try {
            Thread.sleep(seconds * 1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }


    }
}

package com.carfax_ucl.utilities;

import com.carfax_ucl.pages.BasePage;
import com.carfax_ucl.pages.LeadFormPage;
import com.github.javafaker.Faker;
import org.junit.Assert;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
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





    public void checkBoxSelection(String numberOfChecking){//1 2 3
        numberOfChecking = numberOfChecking.replace(",", "");
        Map<String,Object> numberofElement=new HashMap<>();
        numberofElement.put("number",1);
        numberofElement.put("number",2);
        numberofElement.put("number",3);
        numberofElement.put("number",4);
        System.out.println(numberofElement);
        if (numberOfChecking.equals("1")) {
            driver.findElement(By.xpath("(//span[@class='checkbox-list-item--fancyCbx'])[1]")).click();
        } else if (numberOfChecking.equals("2")) {
            driver.findElement(By.xpath("(//span[@class='checkbox-list-item--fancyCbx'])[2]")).click();
        } else if (numberOfChecking.equals("3")) {
            driver.findElement(By.xpath("(//span[@class='checkbox-list-item--fancyCbx'])[3]")).click();
        } else if (numberOfChecking.equals("4")) {
            driver.findElement(By.xpath("(//span[@class='checkbox-list-item--fancyCbx'])[4]")).click();
        } else if (numberOfChecking.equals("1234")) {
            driver.findElement(By.xpath("(//span[@class='checkbox-list-item--fancyCbx'])[1]")).click();
            driver.findElement(By.xpath("(//span[@class='checkbox-list-item--fancyCbx'])[2]")).click();
            driver.findElement(By.xpath("(//span[@class='checkbox-list-item--fancyCbx'])[3]")).click();
            driver.findElement(By.xpath("(//span[@class='checkbox-list-item--fancyCbx'])[4]")).click();
        }else if(numberOfChecking.equals("12")){
            driver.findElement(By.xpath("(//span[@class='checkbox-list-item--fancyCbx'])[1]")).click();
            driver.findElement(By.xpath("(//span[@class='checkbox-list-item--fancyCbx'])[2]")).click();
        }else if(numberOfChecking.equals("13")){
            driver.findElement(By.xpath("(//span[@class='checkbox-list-item--fancyCbx'])[1]")).click();
            driver.findElement(By.xpath("(//span[@class='checkbox-list-item--fancyCbx'])[3]")).click();
        }else if(numberOfChecking.equals("14")) {
            driver.findElement(By.xpath("(//span[@class='checkbox-list-item--fancyCbx'])[1]")).click();
            driver.findElement(By.xpath("(//span[@class='checkbox-list-item--fancyCbx'])[4]")).click();
        }else if(numberOfChecking.equals("14")) {
            driver.findElement(By.xpath("(//span[@class='checkbox-list-item--fancyCbx'])[1]")).click();
            driver.findElement(By.xpath("(//span[@class='checkbox-list-item--fancyCbx'])[4]")).click();
        }
    }




    public void sendToMyPhone() throws InterruptedException {

        BasePage basePage=new BasePage();
        //todo window handles for VDP
        Set<String> windows = driver.getWindowHandles();
        for(String window : windows){
            if(driver.switchTo().window(window).getCurrentUrl().contains("vehicle")) {
                System.out.println(driver.getTitle());break;}
        }



        //todo clicking on send to my phone btn

        wait.until(ExpectedConditions.elementToBeClickable(basePage.getSendToMyPhone().sendToMyPhoneHeader)).click();
        basePage.getSendToMyPhone().enterYourMobilePhone.click();
        basePage.getSendToMyPhone().enterYourMobilePhone.sendKeys("5555555555");
        wait.until(ExpectedConditions.elementToBeClickable(basePage.getSendToMyPhone().sendBtn)).click();
        Thread.sleep(2000);
        Assert.assertTrue(driver.findElement(By.xpath("//p[@class='cfx-modal-complete-title']")).isDisplayed());



    }

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


}

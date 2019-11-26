package com.carfax_ucl.utilities;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.HashMap;
import java.util.Map;
import java.util.NoSuchElementException;


public  class TestBase {



public static WebDriver driver=Driver.get();
public static Actions actions=new Actions(driver);
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




public void sendToMyPhone() throws NoSuchElementException{



    WebElement sendToMyPhoneBtn = driver.findElement(By.xpath("(//button[@class='button phone'])[1]"));
    WebElement enterPhoneNumber = driver.findElement(By.xpath("//input[@name='phone'][@placeholder='Enter your mobile phone #']"));

    WebElement sendBtn = driver.findElement(By.xpath("//button[@type='submit'][@value='Send']"));


    // wait.until(ExpectedConditions.elementToBeClickable(sendToMyPhoneBtn)).click();
    actions.moveToElement(sendToMyPhoneBtn).click();
    enterPhoneNumber.click();
    enterPhoneNumber.sendKeys("5555555555");
    sendBtn.click();
    wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.xpath("//p[@class='cfx-modal-complete-title']"))));
    Assert.assertTrue(driver.findElement(By.xpath("//p[@class='cfx-modal-complete-title']")).isDisplayed());


}







}

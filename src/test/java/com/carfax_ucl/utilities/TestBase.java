package com.carfax_ucl.utilities;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


public class TestBase {



public static WebDriver driver=Driver.get();
public static Actions actions=new Actions(driver);


public static void main(String[] arg){
    Map<String,Object> numberofElement=new HashMap<>();
    numberofElement.put("number",1);
    numberofElement.put("number",2);
    numberofElement.put("number",3);
    numberofElement.put("number",4);

    System.out.println(numberofElement.size());
    System.out.println(numberofElement);
}
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












}

package com.carfax_ucl.pages;

import com.carfax_ucl.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SendToMyPhone {

    public SendToMyPhone(){
        PageFactory.initElements(Driver.get(),this);
    }


    @FindBy(xpath = "(//button[contains(text(),'Send to my Phone ')])[1]")
    public WebElement sendToMyPhoneHeader;


    @FindBy(xpath = "//input[@name='phone'][@type='tel'][@placeholder='Enter your mobile phone #']")
    public WebElement enterYourMobilePhone;

    @FindBy(xpath = "//button[@type='submit'][@value='Send']")
    public WebElement sendBtn;


}

package com.carfax_ucl.pages;

import com.carfax_ucl.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ShareHeaderPage {

    public ShareHeaderPage(){
        PageFactory.initElements(Driver.get(),this);
    }

    @FindBy(xpath = "(//button[contains(text(),'Share ')])[1]")
    public WebElement shareHeader;

    @FindBy(id = "fromEmail")
    public WebElement fromEmail;
    @FindBy(xpath = "//input[@name='toEmail'][@placeholder='To: email address']")
    public WebElement toEmail;

    @FindBy(xpath = "(//a[contains(text(),'Add a personal note(optional)')])[3]")
    public WebElement addPersonalNote;


    @FindBy(xpath = "//textarea[@name='message'][@type='email']")
    public WebElement messageNote;
    @FindBy(xpath = "//button[@type='submit'][@value='Send']")
    public WebElement sendBtn;



}

package com.carfax_ucl.pages;

import com.carfax_ucl.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class FollowBtnPage extends MainSignUpPage {



    public FollowBtnPage(){
        PageFactory.initElements(Driver.get(),this);
    }

    @FindBy(xpath = "//a[@class='hero__button button--green' and contains(text(),'Find a Used')]")
    public WebElement findAUsedCarBtn;

    @FindBy(xpath = "//input[@name='zip']")
    public WebElement zipCodeMainPage;
    @FindBy(id ="make-model-form-submit")
    public WebElement submitBtn;
    @FindBy(xpath = "//button[@class='button large primary-green']")
    public WebElement showMeBtn;

    //@FindBy(xpath = "//button[@type='button'][@class='btn btn-oval btn-following  ']")
    @FindBy(xpath = "//i[contains(@class,'follow-button__heart fa fa-hear')]")
    public WebElement FollowBtn;


    @FindBy(xpath = "//button[@type='submit'][@value='Send']")
    public WebElement startFollowingBtn;

    @FindBy(xpath = "(//input[@name='zip'][@placeholder='Zip Code'])[3]")
    public WebElement zipCode;


    @FindBy(xpath = "//input[@name='email'][contains(@placeholder,'Email Address')]")
    public WebElement email;

    @FindBy(xpath = "//input[@name='password'][@class='ui-input row input-splitModal']")
    public WebElement password;

    @FindBy(xpath = "//button[contains(text(),'Save Password')]")
    public WebElement savePasswordBtn;


}
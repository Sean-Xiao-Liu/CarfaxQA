package com.carfax_ucl.pages;

import com.carfax_ucl.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
public class vdpSaveThisSearchPage extends MainSignUpPage{
    public vdpSaveThisSearchPage(){
        PageFactory.initElements(Driver.get(),this);
    }
    @FindBy(xpath = "//a[@class='cgh-link-tag' and contains(text(),'Used Cars for')]")
    public WebElement usedCarsForSaleHeader;
    @FindBy(xpath = "//a[@class='hero__button button--green' and contains(text(),'Find a Used')]")
    public WebElement findAUsedCarBtn;
    @FindBy(xpath="(//select[contains(@class,'form-control')])[1]")
    public WebElement selectMakeOption;
    @FindBy(xpath = "(//select[contains(@class,'form-control search')])[2]")
    public WebElement selectModelOption;
    @FindBy(xpath = "//input[@name='zip']")
    public WebElement zipCodeMainPage;
    @FindBy(id ="make-model-form-submit")
    public WebElement submitBtn;
    @FindBy(xpath = "//button[@class='button large primary-green']")
    public WebElement showMeBtn;
    @FindBy(xpath = "//button[@class='button expanded cfx-green btn-savedSearch']")
    public WebElement saveThisSearchMainPage;
    @FindBy(xpath = "//input[@name='email'][@placeholder='Email Address']")
    public WebElement emailAddress;
    @FindBy(xpath = "(//input[@name='zip'][@placeholder='Zip Code'])[2]")
    public WebElement zipCodeSaveSearchPage;
    @FindBy(xpath = "//button[@type='submit'][@value='Send']")
    public WebElement saveThisSearchBtn;
    @FindBy(xpath = "//button[@type='submit' and contains(text(),'Save Password')]")
    public WebElement savePasswordBtn;
}
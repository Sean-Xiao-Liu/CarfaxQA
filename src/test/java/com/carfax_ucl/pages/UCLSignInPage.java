package com.carfax_ucl.pages;

import com.carfax_ucl.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import javax.xml.xpath.XPath;

public class UCLSignInPage {

    public UCLSignInPage(){
        PageFactory.initElements(Driver.get(),this);
    }
    @FindBy(xpath = "//a[@class='hero__button button--green' and contains(text(),'Find a Used')]")
    public WebElement findAUsedCarBtn;
    @FindBy(xpath = "//a[@id='header-signin']")
    public WebElement UclSignIn;

    @FindBy(xpath = "//input[@name='email'][@placeholder='Email Address']")
    public WebElement email;

    @FindBy(xpath = "//input[@name='password'][@placeholder='Password']")
    public WebElement password;

    @FindBy(xpath = "//button[@type='submit'][@value='Login']")
    public WebElement signInBtn;

    @FindBy(xpath = "//a[contains(text(),'Create an Account')]")
    public WebElement createAccount;
    @FindBy(xpath = "//a[contains(text(),'Forgot Password?')]")
    public WebElement forgotPassword;

    @FindBy(xpath = "//input[@name='email'][@placeholder='Enter your email address']")
    public WebElement EnterEmail;

    @FindBy(xpath = "//input[@name='password'][@placeholder='Enter password']")
    public WebElement EnterPassword;

    @FindBy(xpath = "//input[@name='zip'][@placeholder='Home Zip']")
    public WebElement zipcode;

    @FindBy(xpath = "//button[@type='submit'][@value='Send']")
    public WebElement createAccountBtn;
    @FindBy(xpath = "//a[contains(text(),'Login Here')]")
    public WebElement loginHereBtn;

    @FindBy(xpath = "//button[@type='submit' and contains(text(),'Reset Password')]")
    public WebElement resetPassword;

    @FindBy(xpath = "//a[@id='header-logout']")
    public WebElement logout;










}

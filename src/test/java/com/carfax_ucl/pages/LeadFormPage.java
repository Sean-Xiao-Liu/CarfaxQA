package com.carfax_ucl.pages;

import com.carfax_ucl.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LeadFormPage {

    public LeadFormPage(){
        PageFactory.initElements(Driver.get(),this);
    }

    @FindBy(xpath = "(//input[@name='firstName'][@placeholder='First Name'])[2]")
    public WebElement firstName;

    @FindBy(xpath = "(//input[@name='lastName'][@placeholder='Last Name'])[2]")
    public WebElement lastName;

    @FindBy(xpath = "(//input[@name='zip'][@placeholder='Zip Code'])[2]")
    public WebElement zipCode;

    @FindBy(xpath = "(//input[@type='email'][@name='email'])[2]")
    public WebElement email;

    @FindBy(xpath = "(//input[@name='phone'][@placeholder='Phone Number'])[2]")
    public WebElement phoneNumber;

    @FindBy(xpath = "(//span[@class='checkbox-list-item--fancyCbx'])[5]")
    public WebElement isThisVehicleAvailable;

    @FindBy(xpath = "(//span[@class='checkbox-list-item--fancyCbx'])[6]")
    public WebElement whatPaymentTermsAreAvailable;
    @FindBy(xpath = "")
    public




}

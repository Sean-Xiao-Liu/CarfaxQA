package com.carfax_ucl.pages;

import com.carfax_ucl.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CheckAvailabilityLinksPage {

    public CheckAvailabilityLinksPage(){

        PageFactory.initElements(Driver.get(),this);
    }


    @FindBy(xpath = "(//a[contains(text(),'Privacy Policy')])[2]")
    public WebElement prvacyPolicy;

    @FindBy(xpath ="(//a[contains(text(),'Terms of Use')])[2]" )
    public WebElement termsOfUse;

    @FindBy(xpath = "(//span[@class='dealer-contact-title'])[2]")
    public WebElement checkAvailability;

    @FindBy(css = "h1.entry-title")
    public WebElement title;
}

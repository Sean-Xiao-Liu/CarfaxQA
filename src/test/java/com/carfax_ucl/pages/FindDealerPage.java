package com.carfax_ucl.pages;

import com.carfax_ucl.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class FindDealerPage {

    public FindDealerPage(){
        PageFactory.initElements(Driver.get(),this);

    }

    @FindBy(xpath = "//a[@class='hero__button button--green' and contains(text(),'Find a Used')]")
    public WebElement findAUsedCarBtn;

    @FindBy(xpath = "//a[@class='homepage-fad-link'][contains(text(),'Find a Dealer')]")
    public WebElement findADealerBtn;

    @FindBy(xpath = "//select[@class='search-make']")
    public WebElement selectMakeBtn;

    @FindBy(xpath = "//input[@name='zip'][@placeholder='Zip Code']")
    public WebElement zipcode;

    @FindBy(xpath = "//span[@class='checkbox-list-item--fancyCbx']")
    public WebElement certifiedPreOwnedVehicles;

    @FindBy(xpath = "//button[@type='submit'][@id='fadSubmit']")
    public WebElement showMeBtn;

    @FindBy(xpath = "//div[@class='results-header-title']")
    public WebElement DealerHeaderTitle;
    @FindBy (xpath = "//div[contains(@class,'dealer-info-section-name')]")
    public WebElement dealerName;

    @FindBy(xpath = "//div[@class='srp-list-item-dealership-location']")
    public WebElement dealerLocation;

    @FindBy(xpath = "//a[contains(text(),'Visit Dealer Website')]")
    public WebElement visitDealerWebsite;

    @FindBy(css = "g#Page-1")
    public WebElement carfaxLogo;

@FindBy(xpath = "//span[contains(text(),'Home')]")
public WebElement HomeBtn;
    @FindBy(xpath = "//h5[@class='fad-no-results-title']")
    public WebElement noResultIsFoundMessage;
}

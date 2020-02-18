package com.carfax_ucl.pages;

import com.carfax_ucl.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class DealerWebsitePage {

    public DealerWebsitePage(){

        PageFactory.initElements(Driver.get(),this);
    }


    @FindBy(xpath = "//h2[contains(text(),'Dealer Info')]")

    public WebElement dealerInfo;

    @FindBy(css = "span.dealer-name")
    public WebElement dealerName;

    @FindBy(xpath = "//p[contains(text(),'Dealer Website')]")
    public WebElement dealerWebsite;


}

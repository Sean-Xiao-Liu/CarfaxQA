package com.carfax_ucl.pages;

import com.carfax_ucl.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class FooterLinksPage {

    public FooterLinksPage(){
        PageFactory.initElements(Driver.get(),this);
    }

    @FindBy(css = "div.footer__links-header")
    public WebElement footerLinksHeader;

    @FindBy(xpath = "(//a[@rel='noopener noreferrer'])[1]")
    public WebElement myCarfax;

    @FindBy(xpath = "(//a[@rel='noopener noreferrer'])[2]")
    public WebElement resources;

    @FindBy(xpath = "(//a[@rel='noopener noreferrer'])[3]")
    public WebElement recalls;

    @FindBy(xpath = "(//a[@rel='noopener noreferrer'])[4]")
    public WebElement sampleReports;

    @FindBy(xpath = "(//a[@rel='noopener noreferrer'])[5]")
    public WebElement aboutCarfax;

    @FindBy(xpath = "(//a[@rel='noopener noreferrer'])[6]")
    public WebElement blog;

    @FindBy(xpath = "(//a[@rel='noopener noreferrer'])[7]")
    public WebElement pressRoom;

    @FindBy(xpath = "(//a[@rel='noopener noreferrer'])[8]")
    public WebElement carfaxForDealers;

    @FindBy(xpath = "(//a[@rel='noopener noreferrer'])[9]")
    public WebElement carfaxBanking;

    @FindBy(xpath = "(//a[@rel='noopener noreferrer'])[10]")
    public WebElement careers;
}

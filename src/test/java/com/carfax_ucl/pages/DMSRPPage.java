package com.carfax_ucl.pages;

import com.carfax_ucl.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class DMSRPPage {


    public DMSRPPage(){

        PageFactory.initElements(Driver.get(), this);
    }


@FindBy(xpath = "//p[contains(text(),'Dealer Inventory')]")
    public WebElement dealerInventory;

    @FindBy(xpath = "(//div[@class='dmsp-header__department'])[1]")
    public  WebElement salesTable;

    @FindBy(xpath = "(//div[@class='dmsp-header__department'])[2]")
    public WebElement serviceTable;

    @FindBy(xpath = "//select[@name='make']/option")
    public WebElement allMakes;

    @FindBy(xpath = "//select[@name='model']/option")
    public WebElement allModels;

    @FindBy(css = "h2.fad-summary-total")
    public WebElement titleHeader;

    @FindBy(xpath = "//div[contains(text(),'SERVICE')]")
    public WebElement service;

    @FindBy(css = "h2.dealer-services__section-title")
    public WebElement dealerTitle;

    @FindBy(xpath = "//div[contains(text(),'RATINGS & REVIEWS')]")
    public WebElement ratingsReviews;

    @FindBy( css= "li[class='rr-filter show-all']")
    public WebElement allReviews;

    @FindBy(css = "li[class='rr-filter show-sales']")
    public WebElement salesReviewsOnly;

    @FindBy(css = "li[class='rr-filter show-service']")
    public WebElement  serviceReviewsOnly;


    @FindBy(css = "div.ratings-and-reviews-summary")
    public WebElement ratingsTable;

    @FindBy(css = "ul.srp-list-item-pillars-list")
    public WebElement fourPillars;



}

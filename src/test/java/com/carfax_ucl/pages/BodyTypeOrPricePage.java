package com.carfax_ucl.pages;

import com.carfax_ucl.utilities.Driver;
import cucumber.api.java.en_lol.WEN;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BodyTypeOrPricePage {

    public BodyTypeOrPricePage(){
        PageFactory.initElements(Driver.get(),this);
    }

    @FindBy(id ="bodyTypePanel-label" )
    public WebElement bodyTypeOrPrice;
    @FindBy(xpath = "//select[@class='form-control search-bodystyle']/option")
    public WebElement bodyType;

    @FindBy(xpath = "//select[@class='form-control search-price']/option")
    public WebElement priceRange;

    @FindBy(css = "input[name='zip'][placeholder='Zip Code']")
    public WebElement zipCode;

    @FindBy(id = "bodyType-form-submit")
    public WebElement nextBtn;

    @FindBy(css = "button[class='button large primary-green']")
    public WebElement showMeBtn;







}

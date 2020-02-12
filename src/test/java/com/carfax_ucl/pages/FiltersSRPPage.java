package com.carfax_ucl.pages;

import com.carfax_ucl.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class FiltersSRPPage {

    public FiltersSRPPage(){
        PageFactory.initElements(Driver.get(),this);
    }


    @FindBy(xpath = "//span[contains(@id,'pillarsFilter_')]")
    public List<WebElement> FourPillars;



    @FindBy(xpath = "//span[contains(@id,'trimFilter_')]")
    public List<WebElement> trimLevel;

    @FindBy(id = "bodyTypeFilter")
    public WebElement bodyTypeHeader;

    @FindBy(xpath = "//span[contains(@id,'bodyTypeAccordion_checkboxes_')]")
    public List<WebElement> bodyTypeDropDown;

    @FindBy(id = "driveTypesFilter")
    public WebElement driveTrain;

    @FindBy(xpath = "//span[contains(@id,'driveTypesAccordion_checkboxes_')]")
    public List<WebElement> driveTrainDropDown;

    @FindBy(id = "fuelTypesFilter")
    public WebElement fuelType;

    @FindBy(xpath = "//span[contains(@id,'fuelTypesAccordion_checkboxes_')]")
    public List<WebElement> fuelTypeDropDown;

    @FindBy(id = "interiorColorsFilter")
    public WebElement interiorColor;

    @FindBy(xpath = "//span[contains(@id,'interiorColorsAccordion_checkboxes_')]")
    public List<WebElement> interioColorDropDown;

    @FindBy(id = "popularOptionsFilter")
    public WebElement popularOptions;

    @FindBy(xpath = "//span[contains(@id,'popularOptionsAccordion_checkboxes_')]")
    public List<WebElement> popularOptionsDropDown;








}

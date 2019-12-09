package com.carfax_ucl.step_definitions;

import com.carfax_ucl.pages.*;
import com.carfax_ucl.utilities.ConfigurationReader;
import com.carfax_ucl.utilities.Driver;
import com.carfax_ucl.utilities.TestBase;
import com.github.javafaker.Faker;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.util.List;
import java.util.concurrent.TimeUnit;
public class test extends TestBase {
    public WebDriverWait wait=new WebDriverWait(Driver.get(),3);
    public  WebDriver driver= Driver.get();
    public Actions actions=new Actions(driver);
    public  Faker faker=new Faker();
    public TestBase  testBase=new TestBase();
    @Before
    public void beforeTest(){
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(1, TimeUnit.SECONDS);
        driver.get(ConfigurationReader.get("url"));
    }
    @Test
//todo DONE!!!!!!!
    public void SaveSearchTest() throws InterruptedException{
        vdpSaveThisSearchPage vdp=new vdpSaveThisSearchPage();
        int model=1;
        for(int i=1;i<4;i++) {
            //todo clicking on find a used car button
            wait.until(ExpectedConditions.elementToBeClickable(vdp.findAUsedCarBtn)).click();
            // todo clicking on 'Select Make' dropdown
            driver.findElement(By.xpath("(//select[contains(@class,'form-control')])[1]")).click();
            List<WebElement> listOfMakes=driver.findElements(By.xpath("//option[contains(@id,'make_')]"));
            // List<WebElement> listOfModel=driver.findElements(By.xpath("//optgroup/option[contains(@id,'model_')]"));
            //todo clicking on 'select make' button
            wait.until(ExpectedConditions.elementToBeClickable(listOfMakes.get(i))).click();
            actions.doubleClick(listOfMakes.get(i)).build().perform();
            WebElement modelOfCar=driver.findElement(By.xpath("(//optgroup/option[contains(@id,'model_')])[" +model+"]"));
            model++;
            String email=faker.name().name()+"@mail.com";
            email=email.replace(" ","");
//todo clicking on 'Select model' dropdown
            wait.until(ExpectedConditions.visibilityOf(
                    driver.findElement(By.cssSelector("select[class='form-control search-model ']")))).click();
            modelOfCar.click();
            actions.doubleClick(modelOfCar).build().perform();
            //todo clicking on 'Zipcode'
            vdp.zipCodeMainPage.click();
            vdp.zipCodeMainPage.sendKeys("22204");
            //todo clicking on 'Next' button
            wait.until(ExpectedConditions.elementToBeClickable(vdp.submitBtn)).click();
            Thread.sleep(1000);
            //todo clicking on 'Show me  Results'
            wait.until(ExpectedConditions.elementToBeClickable(vdp.showMeBtn)).click();
//todo clicking on 'Save this search ' filter
            wait.until(ExpectedConditions.elementToBeClickable(vdp.saveThisSearchMainPage)).click();
            //todo fill out all info to create account
            wait.until(ExpectedConditions.visibilityOf(vdp.emailAddress)).click();
            vdp.emailAddress.sendKeys(email);
            vdp.zipCodeSaveSearchPage.click();
            vdp.zipCodeSaveSearchPage.sendKeys("22012");
            vdp.saveThisSearchBtn.click();
            vdp.password.click();
            vdp.password.sendKeys("Anna12399");
            vdp.savePasswordBtn.click();
            Thread.sleep(1000);
            //todo logging out from account
            driver.findElement(By.xpath("//a[@id='header-logout']")).click();
            //todo clicking on carfax header on upper left side
            driver.findElement(By.cssSelector("g[id='Page-1']")).click();
        }
//todo closing browser instance
        driver.quit();
    }
    @Test
//todo DONE TESTED , CREATE STEP DEF FOR THIS
    public void followBtnTest() throws InterruptedException{
        FollowBtnPage followBtnPage=new FollowBtnPage();
        int model=1;
        wait.until(ExpectedConditions.elementToBeClickable(followBtnPage.findAUsedCarBtn)).click();
        for(int i=1;i<5;i++) {
            driver.findElement(By.xpath("(//select[contains(@class,'form-control')])[1]")).click();
            List<WebElement> listOfMakes = driver.findElements(By.xpath("//option[contains(@id,'make_')]"));
            // List<WebElement> listOfModel=driver.findElements(By.xpath("//optgroup/option[contains(@id,'model_')]"));
            //todo clicking on 'select make' button
            Thread.sleep(1000);
            listOfMakes.get(i).click();
            actions.doubleClick(listOfMakes.get(i)).build().perform();
            WebElement modelOfCar = driver.findElement(By.xpath("(//optgroup/option[contains(@id,'model_')])[" + model + "]"));
            model++;
            String email = faker.name().name() + "@mail.com";
            email = email.replace(" ", "");
            driver.findElement(By.cssSelector("select[class='form-control search-model ']")).click();
            modelOfCar.click();
            actions.doubleClick(modelOfCar).build().perform();
            followBtnPage.zipCodeMainPage.click();
            followBtnPage.zipCodeMainPage.sendKeys("22204");
            followBtnPage.submitBtn.click();
            Thread.sleep(1000);
            wait.until(ExpectedConditions.elementToBeClickable(followBtnPage.showMeBtn)).click();
            //  int numberOfCar=1;
//        WebElement headerOfCar=driver.findElement(By.xpath("(//span[@class='srp-list-item-basic-info-model'])["+numberOfCar+"]"));
//        numberOfCar++;
            // headerOfCar.click();
            //todo check upperFollowBtn element todo
            Thread.sleep(1000);
            wait.until(ExpectedConditions.elementToBeClickable(followBtnPage.FollowBtn)).click();
            try {
                followBtnPage.email.click();
                followBtnPage.email.sendKeys(email);
                followBtnPage.zipCode.click();
                followBtnPage.zipCode.sendKeys("22204");
                followBtnPage.startFollowingBtn.click();
                Thread.sleep(1000);
                followBtnPage.password.click();
                followBtnPage.password.sendKeys("hdjfdsA1155");
                followBtnPage.savePasswordBtn.click();
            }catch (WebDriverException e){
                System.out.println("Exception catch");
            }
            //todo verifying title of the expected result
            Thread.sleep(1000);
//driver.findElement(By.cssSelector("button#firstFollowModalBtn")).click();
//WebElement tableMessage=driver.findElement(By.xpath("//div[@class='cfx-modal-body-splitModal ']"));
//if(tableMessage.isDisplayed()) {
//    String expectedMessage="You're now following this car!";
//    String actualResult=driver.findElement(By.xpath("//span[@class='cfx-modal-complete-title-78']")).getText();
//    System.out.println(expectedMessage);
//    Assert.assertEquals(expectedMessage,actualResult);
//    driver.findElement(By.cssSelector("button#firstFollowModalBtn")).click();
//    wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.xpath("//a[@class='signout show'][@id='header-logout']")))).click();
//}
            wait.until(ExpectedConditions.elementToBeClickable(driver.findElement(By.xpath("//a[@class='signout show'][@id='header-logout']")))).click();
            //wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.xpath("//a[@class='signout show'][@id='header-logout']")))).click();
        }
        driver.quit();
    }
    @Test
//todo DONE!!!!!
    public void MainSignUpTest() throws InterruptedException  {
        MainSignUpPage signUpPage=new MainSignUpPage();
        for(int i=0;i<4;i++) {
            String emails=faker.name().name()+"@gmail.com";
            emails=emails.replace(" ","");
            signUpPage.signUpHeader.click();
            signUpPage.email.click();
            signUpPage.email.sendKeys(emails);
            signUpPage.password.click();
            signUpPage.password.sendKeys("Anna123333");
            signUpPage.signUpBtn.click();
            Thread.sleep(1000);
            String actualResult=driver.findElement(By.xpath("//h1[contains(@class,'sso-header')]")).getText();
            //wait.until(ExpectedConditions.visibilityOf(actualResult));
            driver.navigate().back();
            String expectedMessage="Success! Please Sign In Below";
            Assert.assertEquals(expectedMessage,actualResult);
            driver.findElement(By.xpath("//img[@title='CARFAX Used Car Listings and Vehicle History']")).click();
        }
        driver.quit();
    }
    @Test
//todo DONE!!!!!
    public void uclSignUp() throws InterruptedException{
        UCLSignUpPage ucl=new UCLSignUpPage();
        for(int i=0;i<4;i++) {
            String emails = faker.name().name() + "@gmail.com";
            emails = emails.replace(" ", "");
            //todo clicking on 'Find a used car' button
            wait.until(ExpectedConditions.elementToBeClickable(ucl.findAUsedCarBtn)).click();
            Thread.sleep(2000);
            // todo clicking on 'Sign Up ' button through UCL page
            wait.until(ExpectedConditions.elementToBeClickable(ucl.uclSignUpBtn)).click();
            //todo filling out all info to create account
            ucl.uclEmail.click();
            ucl.uclEmail.sendKeys(emails);
            ucl.uclPassword.click();
            ucl.uclPassword.sendKeys("Ajskdsh1880");
            ucl.uclZipcode.click();
            ucl.uclZipcode.sendKeys("22204");
            ucl.uclCreateAccount.click();
            Thread.sleep(1000);
            //todo verifying results
            String actualResult=driver.findElement(By.xpath("//span[@class='cfx-modal-complete-title']")).getText();
            String expectedResult="Your account has been created!";
            Assert.assertEquals(expectedResult,actualResult);
            //todo clicking on 'X'
            ucl.closeBtn.click();
            //todo logging out from account
            driver.findElement(By.xpath("//a[@id='header-logout']")).click();
            //todo clicking on 'Carfax' header-logo
            driver.findElement(By.cssSelector("g#Page-1")).click();
        }
//todo closing browser instance
        driver.quit();
    }
    @Test
    public void filteringCars() throws InterruptedException{
        FollowBtnPage followBtnPage=new FollowBtnPage();
        for(int i=1;i<5;i++) {
            int model = 1;
            driver.findElement(By.xpath("//a[@class='hero__button button--green' and contains(text(),'Find a Used')]")).click();
            driver.findElement(By.xpath("(//select[contains(@class,'form-control')])[1]")).click();
            List<WebElement> listOfMakes = driver.findElements(By.xpath("//option[contains(@id,'make_')]"));
            //todo clicking on 'select make' button
            wait.until(ExpectedConditions.elementToBeClickable(listOfMakes.get(i))).click();
            actions.doubleClick(listOfMakes.get(i)).build().perform();
            WebElement a3 = driver.findElement(By.xpath("(//optgroup/option[contains(@id,'model_')])[" + model + "]"));
            model++;
            String email = faker.name().name() + "@mail.com";
            email = email.replace(" ", "");
            driver.findElement(By.cssSelector("select[class='form-control search-model ']")).click();
            a3.click();
            actions.doubleClick(a3).build().perform();
            followBtnPage.zipCodeMainPage.click();
            followBtnPage.zipCodeMainPage.sendKeys("22204");
            followBtnPage.submitBtn.click();
            String checkBox = "1,2,3,4";
            checkBox = checkBox.replace(",", "");
            if (checkBox.equals("1")) {
                driver.findElement(By.xpath("(//span[@class='checkbox-list-item--fancyCbx'])[1]")).click();
            } else if (checkBox.equals("2")) {
                driver.findElement(By.xpath("(//span[@class='checkbox-list-item--fancyCbx'])[2]")).click();
            } else if (checkBox.equals("3")) {
                driver.findElement(By.xpath("(//span[@class='checkbox-list-item--fancyCbx'])[3]")).click();
            } else if (checkBox.equals("4")) {
                driver.findElement(By.xpath("(//span[@class='checkbox-list-item--fancyCbx'])[4]")).click();
            } else if (checkBox.equals("1234")) {
                driver.findElement(By.xpath("(//span[@class='checkbox-list-item--fancyCbx'])[1]")).click();
                driver.findElement(By.xpath("(//span[@class='checkbox-list-item--fancyCbx'])[2]")).click();
                driver.findElement(By.xpath("(//span[@class='checkbox-list-item--fancyCbx'])[3]")).click();
                driver.findElement(By.xpath("(//span[@class='checkbox-list-item--fancyCbx'])[4]")).click();
            }
            Thread.sleep(1000);
            followBtnPage.showMeBtn.click();
            WebElement noAccidentDropdown = driver.findElement(By.xpath("//span[@class='srp-filter--text' and contains(text(),'No Accidents or Damage Reported')]"));
            WebElement carfax1Owner = driver.findElement(By.xpath("//span[@class='srp-filter--text' and contains(text(),'CARFAX 1-Owner')]"));
            WebElement personalUse = driver.findElement(By.xpath("//span[@class='srp-filter--text' and contains(text(),'Personal Use')]"));
            WebElement serviceHistory = driver.findElement(By.xpath("//span[@class='srp-filter--text' and contains(text(),'Service History')]"));
            //todo verifying that No Accidents or Damage Reported, CARFAX 1-owner, Personal Use, Service History| is displayed
            try {
                Assert.assertTrue(noAccidentDropdown.isDisplayed());
                Assert.assertTrue(carfax1Owner.isDisplayed());
                Assert.assertTrue(personalUse.isDisplayed());
                Assert.assertTrue(serviceHistory.isDisplayed());
//todo automatisation of the color checkbox
            }catch(WebDriverException s){
                System.out.println("Catch exception");
            }
            int numberofColor = 1;
            List<WebElement> listOfColors = driver.findElements(By.xpath("//span[contains(@id,'colorsFilter_')][@class='srp-filter--fancyCbx']"));
            listOfColors.get(numberofColor).click();
            numberofColor++;
//todo verifying that OnePrice is shown
//    String onePrice=driver.findElement(By.xpath("(//div[@class='value-details row'])[1]")).getText();
//    Assert.assertTrue(onePrice.contains("CARFAX Value"));
            Assert.assertTrue(driver.findElement(By.xpath("//div[@class='value-details row']")).isDisplayed());
            //todo verifying dealer location and dealer name is shown on SRP
            Assert.assertTrue(driver.findElement(By.xpath("//div[contains(@class,'dealer-info-section-name')]")).isDisplayed());
            Assert.assertTrue(driver.findElement(By.xpath("//div[@class='srp-list-item-dealership-location']")).isDisplayed());
            //todo verifying that photos is displayed on main SRP
            Thread.sleep(1000);
            Assert.assertTrue(driver.findElement(By.xpath("//span[@class='photoCount-listings']")).isDisplayed());
            //todo clicking on 'Carfax' header-logo
            try {
                driver.findElement(By.xpath("//span[contains(text(),'Home')]")).click();
            }catch (WebDriverException w){
                System.out.println("Catching Webdriver Exception");
            }
            //  driver.findElement(By.cssSelector("g#Page-1")).click();
        }
        driver.quit();
    }
    @Test
    // todo TESTED!!!
    public void findDealer() {
        //todo Select make dropdown
        for (int i =0; i <2 ; i++) {
            wait.until(ExpectedConditions.elementToBeClickable(
                    driver.findElement(
                            By.xpath("//a[@class='hero__button button--green' and contains(text(),'Find a Used')]")))).click();
            wait.until(ExpectedConditions.elementToBeClickable(
                    driver.findElement(By.xpath("//a[@class='homepage-fad-link'][contains(text(),'Find a Dealer')]")))).click();
            // todo clicking on 'Select Make' dropdown
            driver.findElement(By.xpath("//select[@class='search-make']")).click();
            List<WebElement> listOfMakes = driver.findElements(By.xpath("//option[contains(@id,'make_')]"));
            //todo clicking on 'select make' button
            int make=i;
            wait.until(ExpectedConditions.elementToBeClickable(listOfMakes.get(make))).click();
            ++make;
            Select select=new Select(driver.findElement(By.xpath("//select[@class='search-radius'][@name='radius']")));
            select.selectByIndex(3);
            WebElement zipcode= driver.findElement(By.xpath("//input[@name='zip'][@placeholder='Zip Code']"));
            zipcode.click();
            String zipcodeStr=zipcode.getAttribute("value");
            if(!zipcodeStr.isEmpty()) {
                zipcode.click();
                zipcode.clear();
                zipcode.sendKeys("22204");
            }else{
                zipcode.sendKeys("22201");
            }
            driver.findElement(By.xpath("//button[@type='submit'][@id='fadSubmit']")).click();
            List<WebElement> listOfDealers=driver.findElements(By.xpath("//article[@class='fad-searchListItem']"));
            if(i<33) {
                listOfDealers.get(1).click();
                Assert.assertTrue(driver.findElement(By.xpath("//div[contains(@class,'dealer-info-section-name')]")).isDisplayed());
                Assert.assertTrue(driver.findElement(By.xpath("//div[@class='srp-list-item-dealership-location']")).isDisplayed());
                Assert.assertTrue(driver.findElement(By.xpath("//a[contains(text(),'Visit Dealer Website')]")).isDisplayed());
                driver.findElement(By.xpath("//span[contains(text(),'Home')]")).click();
                // driver.findElement(By.cssSelector("g#Page-1")).click();
            }else if(i>=33 && driver.findElement(By.xpath("//h5[@class='fad-no-results-title']")).isDisplayed()){
                // driver.findElement(By.cssSelector("g#Page-1")).click();
                driver.findElement(By.xpath("//span[contains(text(),'Home')]")).click();
            }else if(i>=33 ){
                listOfDealers.get(0).click();
                Assert.assertTrue(driver.findElement(By.xpath("//a[contains(text(),'Visit Dealer Website')]")).isDisplayed());
                Assert.assertTrue(driver.findElement(By.xpath("//div[contains(@class,'dealer-info-section-name')]")).isDisplayed());
                Assert.assertTrue(driver.findElement(By.xpath("//div[@class='srp-list-item-dealership-location']")).isDisplayed());
                // driver.findElement(By.cssSelector("g#Page-1")).click();
                driver.findElement(By.xpath("//span[contains(text(),'Home')]")).click();
            }
        }
        driver.quit();
    }

    @Test
    //todo TESTED UPDATING WITH POM , testing on beta
    public void findDealer2(){
        FindDealerPage findDealerPage=new FindDealerPage();
        //todo Select make dropdown
        for (int i =0; i <8 ; i++) {
            wait.until(ExpectedConditions.elementToBeClickable(findDealerPage.findAUsedCarBtn)).click();
            wait.until(ExpectedConditions.elementToBeClickable(findDealerPage.findADealerBtn)).click();
            // todo clicking on 'Select Make' dropdown
            wait.until(ExpectedConditions.visibilityOf(findDealerPage.selectMakeBtn)).click();
            List<WebElement> listOfMakes = driver.findElements(By.xpath("//option[contains(@id,'make_')]"));
            //todo clicking on 'select make' button
            int make = i;
            wait.until(ExpectedConditions.visibilityOf(listOfMakes.get(make))).click();
            ++make;
            Select select = new Select(driver.findElement(By.xpath("//select[@class='search-radius'][@name='radius']")));
            select.selectByIndex(2);
            WebElement zipcode = findDealerPage.zipcode;
            zipcode.click();
            String zipcodeStr = zipcode.getAttribute("value");
            if (!zipcodeStr.isEmpty()) {
                zipcode.click();
                zipcode.clear();
                zipcode.sendKeys("22204");
            } else {
                zipcode.sendKeys("22201");
            }
            findDealerPage.showMeBtn.click();
            List<WebElement> listOfDealers = driver.findElements(By.xpath("//article[@class='fad-searchListItem']"));
            if (i < 33) {
                listOfDealers.get(i).click();
                Assert.assertTrue(findDealerPage.dealerName.isDisplayed());
                Assert.assertTrue(findDealerPage.dealerLocation.isDisplayed());
                Assert.assertTrue(findDealerPage.visitDealerWebsite.isDisplayed());
                findDealerPage.HomeBtn.click();
                //findDealerPage.carfaxLogo.click();
            } else if (i >= 33 && findDealerPage.noResultIsFoundMessage.isDisplayed()) {
                findDealerPage.HomeBtn.click();
                // findDealerPage.carfaxLogo.click();
            } else if (i >= 33) {
                listOfDealers.get(i).click();
                Assert.assertTrue(findDealerPage.dealerName.isDisplayed());
                Assert.assertTrue(findDealerPage.dealerLocation.isDisplayed());
                Assert.assertTrue(findDealerPage.visitDealerWebsite.isDisplayed());
                findDealerPage.HomeBtn.click();
                //findDealerPage.carfaxLogo.click();
            }
        }
        driver.quit();
    }
    @Test
    public void testingHyundaiFunctionality() throws InterruptedException{
        FollowBtnPage followBtnPage=new FollowBtnPage();
        int model=1;
        driver.findElement(By.xpath("//a[@class='hero__button button--green' and contains(text(),'Find a Used')]")).click();
        driver.findElement(By.xpath("(//select[contains(@class,'form-control')])[1]")).click();
        List<WebElement> listOfMakes = driver.findElements(By.xpath("//option[contains(@id,'make_')]"));
        //todo clicking on 'select make' button
        Thread.sleep(1000);
        listOfMakes.get(13).click();
        actions.doubleClick(listOfMakes.get(2)).build().perform();
        WebElement a3 = driver.findElement(By.xpath("(//optgroup/option[contains(@id,'model_')])[" + model + "]"));
        model++;
        String email = faker.name().name() + "@mail.com";
        email = email.replace(" ", "");
        driver.findElement(By.cssSelector("select[class='form-control search-model ']")).click();
        a3.click();
        actions.doubleClick(a3).build().perform();
        followBtnPage.zipCodeMainPage.click();
        followBtnPage.zipCodeMainPage.sendKeys("22204");
        followBtnPage.submitBtn.click();
        String checkBox="1,2,3,4";
        checkBox=checkBox.replace(",","");
        if(checkBox.equals("1")) {
            driver.findElement(By.xpath("(//span[@class='checkbox-list-item--fancyCbx'])[1]")).click();
        }else if(checkBox.equals("2")) {
            driver.findElement(By.xpath("(//span[@class='checkbox-list-item--fancyCbx'])[2]")).click();
        }else if(checkBox.equals("3")) {
            driver.findElement(By.xpath("(//span[@class='checkbox-list-item--fancyCbx'])[3]")).click();
        }else if(checkBox.equals("4")) {
            driver.findElement(By.xpath("(//span[@class='checkbox-list-item--fancyCbx'])[4]")).click();
        }else if(checkBox.equals("1234")){
            driver.findElement(By.xpath("(//span[@class='checkbox-list-item--fancyCbx'])[1]")).click();
            driver.findElement(By.xpath("(//span[@class='checkbox-list-item--fancyCbx'])[2]")).click();
            driver.findElement(By.xpath("(//span[@class='checkbox-list-item--fancyCbx'])[3]")).click();
            driver.findElement(By.xpath("(//span[@class='checkbox-list-item--fancyCbx'])[4]")).click();
        }
        followBtnPage.showMeBtn.click();
        int carNumber=1;
        List<WebElement> listOfResults=driver.findElements(By.xpath("//article[contains(@id,'listing_')]"));
        listOfResults.get(1).click();
        Thread.sleep(2000);
        // WebElement viewWindowSteaker=driver.findElement(
        //  By.xpath("//a[contains (text(),'View Window Sticker')]"));
        WebElement view=driver.findElement(
                By.cssSelector("a[href='https://www.carfax.com/phoenix/sticker/v3/HYUNORIG/fVRNs37-3kU-fz4MgkCcMho3MTJ6Q6HorEed_kcHX8g.cfx']"));
        JavascriptExecutor executor = (JavascriptExecutor)driver;
        executor.executeScript("arguments[0].click();", view);
        //actions.moveToElement(viewWindowSteaker).click().build().perform();
        /// System.out.println(viewWindowSteaker.getAttribute("value"));
    }
    @Test
    public void signInThroughSignUp() throws InterruptedException {
        for(int i=0;i<5;i++) {
            String email = faker.name().name() + "@gmail.com";
            email = email.replace(" ", "");
            String password = "Anna12369";
            UCLSignUpPage uclSignUpPage = new UCLSignUpPage();
            uclSignUpPage.findAUsedCarBtn.click();
            Thread.sleep(2000);
            wait.until(ExpectedConditions.visibilityOf(uclSignUpPage.uclSignUpBtn)).click();
            uclSignUpPage.loginHereBtm.click();
            uclSignUpPage.uclEmail.click();
            uclSignUpPage.uclEmail.sendKeys(email);
            uclSignUpPage.uclPassword.click();
            uclSignUpPage.uclPassword.sendKeys(password);
            uclSignUpPage.signInBtn.click();
            WebElement warningMessage = driver.findElement(By.xpath("//span[@class='form-transaction-msg error']"));
            if (warningMessage.isDisplayed()) {
                System.out.println(warningMessage.isDisplayed());
                uclSignUpPage.forgotPassword.click();
                Thread.sleep(1000);
                uclSignUpPage.uclEmail.click();
                uclSignUpPage.uclEmail.sendKeys(email);
                uclSignUpPage.resetPasswordBtn.click();
                Assert.assertTrue(driver.findElement(By.xpath("//span[@class='cfx-modal-complete-title']")).isDisplayed());
            } else {
                uclSignUpPage.logout.click();
                driver.quit();
            }
        }
    }
    @Test
    public void leadFormTest() throws InterruptedException {
        FollowBtnPage followBtnPage=new FollowBtnPage();
        LeadFormPage leadFormPage=new LeadFormPage();
        int model=1;
        wait.until(ExpectedConditions.elementToBeClickable(followBtnPage.findAUsedCarBtn)).click();
        //for(int i=1;i<2;i++) {
        driver.findElement(By.xpath("(//select[contains(@class,'form-control')])[1]")).click();
        List<WebElement> listOfMakes = driver.findElements(By.xpath("//option[contains(@id,'make_')]"));
        // List<WebElement> listOfModel=driver.findElements(By.xpath("//optgroup/option[contains(@id,'model_')]"));
        //todo clicking on 'select make' button
        Thread.sleep(1000);
        listOfMakes.get(1).click();
        actions.doubleClick(listOfMakes.get(1)).build().perform();
        WebElement modelOfCar = driver.findElement(By.xpath("(//optgroup/option[contains(@id,'model_')])[" + model + "]"));
        model++;
        String email = faker.name().name() + "@mail.com";
        email = email.replace(" ", "");
        driver.findElement(By.cssSelector("select[class='form-control search-model ']")).click();
        modelOfCar.click();
        actions.doubleClick(modelOfCar).build().perform();
        followBtnPage.zipCodeMainPage.click();
        followBtnPage.zipCodeMainPage.sendKeys("22204");
        followBtnPage.submitBtn.click();
        Thread.sleep(1000);
        wait.until(ExpectedConditions.elementToBeClickable(followBtnPage.showMeBtn)).click();
//            WebElement length=driver.findElement(By.xpath("//div/div/ul/li/a[contains(@tabindex,'') and (contains(@aria-label,'Page'))]"));
//
//
//            JavascriptExecutor jse = (JavascriptExecutor)driver;
//            jse.executeScript("arguments[0].scrollIntoView();",length);
//
//            Assert.assertTrue( length.isDisplayed());
        int numberOfCar = 1;
        WebElement headerOfCar = driver.findElement(By.xpath("(//span[@class='srp-list-item-basic-info-model'])[" + numberOfCar + "]"));
        numberOfCar++;
        headerOfCar.click();
        //}
        testBase.sendToMyPhone();
//        int numberOfCarusel=1;
//
//       // WebElement vdp=driver.findElement(By.xpath("(//img[contains(@src,'')][@tabindex='-1'])[1]"));
//for(int i=numberOfCarusel;i<4;i++){
//    List<WebElement> caruselCar=driver.findElements(By.xpath("//div[@id='carousel_listing_item_"+i+"']"));
//    List<WebElement> caruselPicture=driver.findElements(By.xpath("(//img[@class='carousel__slide-photo'])"+"["+numberOfCarusel+"]"));
//    System.out.println(caruselPicture.get(i));
//
//
//    Thread.sleep(1000);
//
//wait.until(ExpectedConditions.elementToBeClickable(caruselCar.get(0))).click();
//Thread.sleep(1000);
        driver.quit();
    }
////    System.out.println(call.getAttribute("value"));
//
//
//
//leadFormPage.firstName.click();
//leadFormPage.firstName.sendKeys("anna");
    //actions.moveToElement(leadFormPage.firstName).click().sendKeys(faker.name().firstName()).build().perform();
//             Assert.assertTrue(wait.until(ExpectedConditions.visibilityOf(call)).isDisplayed());
//             Assert.assertTrue(wait.
//                     until(ExpectedConditions.
//
//
//        visibilityOf(driver.findElement(By.xpath("(//span[@class='column' and contains(text(),'Send To: ')])[2]")))).isDisplayed());



    @Test
    public void uclSignIn() throws InterruptedException{
UCLSignInPage uclSignInPage=new UCLSignInPage();

        String email = faker.name().name() + "@mail.com";
        email = email.replace(" ", "");

        wait.until(ExpectedConditions.elementToBeClickable(uclSignInPage.findAUsedCarBtn)).click();

        Thread.sleep(2000);
wait.until(ExpectedConditions.visibilityOf(uclSignInPage.UclSignIn)).click();
Thread.sleep(1000);
uclSignInPage.email.click();
uclSignInPage.email.sendKeys(email);
uclSignInPage.password.click();
uclSignInPage.password.sendKeys("Ajad823782");
uclSignInPage.signInBtn.click();
String errorMessage=driver.findElement(By.xpath("//span[contains(text(),'Your password and email do not match.')]")).getText();

if(errorMessage.contains("password")){
    uclSignInPage.forgotPassword.click();
    uclSignInPage.EnterEmail.click();
    uclSignInPage.EnterEmail.sendKeys(email);
    uclSignInPage.resetPassword.click();
}

    }




}
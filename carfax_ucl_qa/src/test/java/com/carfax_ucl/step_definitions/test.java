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
import java.util.Set;
import java.util.concurrent.TimeUnit;
import java.util.regex.Pattern;

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
            listOfMakes.get(i).click();
            WebElement modelOfCar = driver.findElement(By.xpath("(//optgroup/option[contains(@id,'model_')])[" + model + "]"));
            model++;
            String email = faker.name().name() + "@mail.com";
            email = email.replace(" ", "");
            driver.findElement(By.cssSelector("select[class='form-control search-model ']")).click();
            modelOfCar.click();
            (modelOfCar).click();
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
    public void uclSignIn() throws InterruptedException{
UCLSignInPage uclSignInPage=new  UCLSignInPage();

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
Thread.sleep(1000);

//todo clicking on Forgot password
if(errorMessage.contains("password")){
    uclSignInPage.forgotPassword.click();
    uclSignInPage.EnterEmail.click();
    uclSignInPage.EnterEmail.sendKeys(email);
    uclSignInPage.resetPassword.click();
}
//todo clicking on create an account
if(!errorMessage.isEmpty()){
    uclSignInPage.createAccount.click();
    uclSignInPage.EnterEmail.click();
    uclSignInPage.EnterEmail.sendKeys(email);
    uclSignInPage.EnterPassword.click();
    uclSignInPage.EnterPassword.sendKeys("Aslfdjs2131");
    uclSignInPage.zipcode.click();
    uclSignInPage.zipcode.sendKeys("22201");
    uclSignInPage.createAccountBtn.click();

}

    }
    @Test
    public void sendToMyPhoneTest() throws InterruptedException {

        FollowBtnPage followBtnPage = new FollowBtnPage();
        LeadFormPage leadFormPage = new LeadFormPage();
        int model = 1;
        wait.until(ExpectedConditions.elementToBeClickable(followBtnPage.findAUsedCarBtn)).click();
        //for(int i=1;i<2;i++) {
        driver.findElement(By.xpath("(//select[contains(@class,'form-control')])[1]")).click();
        List<WebElement> listOfMakes = driver.findElements(By.xpath("//option[contains(@id,'make_')]"));
        // List<WebElement> listOfModel=driver.findElements(By.xpath("//optgroup/option[contains(@id,'model_')]"));
        //todo clicking on 'select make' button
        Thread.sleep(1000);
        listOfMakes.get(1).click();
        listOfMakes.get(1).click();
        WebElement modelOfCar = driver.findElement(By.xpath("(//optgroup/option[contains(@id,'model_')])[" + model + "]"));
        model++;
        String email = faker.name().name() + "@mail.com";
        email = email.replace(" ", "");
        driver.findElement(By.cssSelector("select[class='form-control search-model ']")).click();
        modelOfCar.click();
        modelOfCar.click();
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
        testBase.checkBoxSelection("123");
        int numberOfCar = 1;
        WebElement headerOfCar = driver.findElement(By.xpath("(//span[@class='srp-list-item-basic-info-model'])[" + numberOfCar + "]"));
        numberOfCar++;
        headerOfCar.click();
Thread.sleep(2000);


driver.switchTo().frame(driver.findElement(By.xpath("//iframe[@title='CMP Locator']")));
driver.switchTo().defaultContent();
//todo gives No Such Element Exception , but element is correct
        wait.until(ExpectedConditions.elementToBeClickable(driver.findElement(By.xpath("(//button[contains(text(),'Send to my Phone ')])[1]")))).click();


    }



    //TODO make on Feature file for Gerhkin language DONE !!!!!!!!!
    @Test
    public void leadFormTest() throws InterruptedException {
        JavascriptExecutor jse = (JavascriptExecutor)driver;

        BasePage basePage=new BasePage();

        String email = faker.name().name() + "@mail.com";
        email = email.replace(" ", "");
        String model="Q3";
        String make="Audi";
        wait.until(ExpectedConditions.elementToBeClickable(basePage.getFollowBtnPage().findAUsedCarBtn)).click();
        //for(int i=1;i<2;i++) {
        Thread.sleep(2000);

        //todo Clicking to choose a make
        List <WebElement> makes =driver.findElements(By.xpath("//select[@name='make']/optgroup[@label='Popular Makes']/option"));
        for(WebElement temp :makes){
            if(temp.getText().trim().equals(make)){
                temp.click();
                break;
            }

        }
        //todo clicking to choose a make
        Thread.sleep(2000);
        //wait.until(ExpectedConditions.elementToBeClickable(driver.findElement(By.xpath("//select[@name='model']/optgroup[@label='Current Models']"))));
        List <WebElement> models =driver.findElements(By.xpath("//select[@name='model']/optgroup[@label='Current Models']/option"));
        System.out.println("models = " + models.size());
        for(WebElement temp :models){
            if(temp.getText().trim().equals(model)){
                temp.click();
                break;
            }

        }
//todo clicking on zipcode
        basePage.getFollowBtnPage().zipCodeMainPage.click();
        basePage.getFollowBtnPage().zipCodeMainPage.sendKeys("22204");
        ///todo clicking onn Next button
        wait.until(ExpectedConditions.elementToBeClickable(basePage.getFollowBtnPage().submitBtn)).click();

      Thread.sleep(3000);
//todo clicking on 'Show me Result' button
        wait.until(ExpectedConditions.elementToBeClickable(basePage.getFollowBtnPage().showMeBtn)).click();

Thread.sleep(5000);

       jse.executeScript("arguments[0].scrollIntoView(true);",driver.findElement(By.xpath("//*[@id=\"react-app\"]/div/div[1]/div[2]/div[1]/div[2]/div[2]/div[2]/div[1]/div[3]/div[1]/span")));

        //todo manipulations with header of the car on SRP
        //int numberOfCar = 2;


        //TODO TEST FOR SCROLLING DOWN
//        WebElement headerOfCar = driver.findElement(By.xpath("(//span[@class='srp-list-item-basic-info-model'])[" + numberOfCar + "]"));
//        numberOfCar++;
//        headerOfCar.click();
//        //todo window handles for VDP
//        Set<String> windows = driver.getWindowHandles();
//        for(String window : windows){
//            if(driver.switchTo().window(window).getCurrentUrl().contains("vehicle")) {
//                System.out.println(driver.getTitle());break;}
//        }
//        //todo scrolling down to element
//        WebElement length=driver.findElement(By.xpath("//*[@id=\"react-app\"]/div/div[1]/div[2]/div[1]/section[3]/div/div[2]/div[1]/div[2]/div/div[1]/div/span[1]"));
//        jse.executeScript("arguments[0].scrollIntoView(true);",length);
//        //todo input for Lead Form
//        //todo Positive scenario :
//        basePage.getLeadFormPage().firstName.click();
//        basePage.getLeadFormPage().firstName.sendKeys("TestQA");
//        basePage.getLeadFormPage().lastName.click();
//        basePage.getLeadFormPage().lastName.sendKeys("test");
//
//       // Thread.sleep(2000);
//        System.out.println(basePage.getLeadFormPage().zipCode.getAttribute("value"));
//
//       //Thread.sleep(100);
//for(int i =0;i<6;i++){
//   // Thread.sleep(1000);
//    basePage.getLeadFormPage().zipCode.click();
//    basePage.getLeadFormPage().zipCode.sendKeys(Keys.BACK_SPACE);
//
//}
//
//
//        if(basePage.getLeadFormPage().zipCode.getText().isEmpty()) {
//            basePage.getLeadFormPage().zipCode.click();
//            basePage.getLeadFormPage().zipCode.sendKeys("22001");
//
//        }else if(!basePage.getLeadFormPage().zipCode.getText().isEmpty()){
//            basePage.getLeadFormPage().zipCode.click();
//            basePage.getLeadFormPage().zipCode.clear();
//            basePage.getLeadFormPage().zipCode.sendKeys("22304");
//        }
//        basePage.getLeadFormPage().phoneNumber.sendKeys("5555555555");
//basePage.getLeadFormPage().sendMessage.click();
//Thread.sleep(2000);
//
//Assert.assertEquals(driver.findElement(By.xpath("//span[contains(text(),'Thank you for contacting this dealer.')]")).getText()
//,"Thank you for contacting this dealer.");
//




        driver.quit();
    }


    @Test
    public void basicTest() throws InterruptedException {
        BasePage basePage=new BasePage();

        String email = faker.name().name() + "@mail.com";
        email = email.replace(" ", "");
        String model="Q3";
        String make="Audi";
        wait.until(ExpectedConditions.elementToBeClickable(basePage.getFollowBtnPage().findAUsedCarBtn)).click();
        //for(int i=1;i<2;i++) {
        Thread.sleep(2000);

        //todo Clicking to choose a make
        List <WebElement> makes =driver.findElements(By.xpath("//select[@name='make']/optgroup[@label='Popular Makes']/option"));
        for(WebElement temp :makes){
            if(temp.getText().trim().equals(make)){
                temp.click();
                break;
            }

        }
        //todo clicking to choose a make
        Thread.sleep(1000);
        //wait.until(ExpectedConditions.elementToBeClickable(driver.findElement(By.xpath("//select[@name='model']/optgroup[@label='Current Models']"))));
        List <WebElement> models =driver.findElements(By.xpath("//select[@name='model']/optgroup[@label='Current Models']/option"));
        System.out.println("models = " + models.size());
        for(WebElement temp :models){
            if(temp.getText().trim().equals(model)){
                temp.click();
                break;
            }

        }
//todo clicking on zipcode
        basePage.getFollowBtnPage().zipCodeMainPage.click();
        basePage.getFollowBtnPage().zipCodeMainPage.sendKeys("22204");
        ///todo clicking onn Next button
        wait.until(ExpectedConditions.elementToBeClickable(basePage.getFollowBtnPage().submitBtn)).click();

//todo clicking on 'Show me Result' button
wait.until(ExpectedConditions.textMatches((By.xpath("//span[@class='totalRecordsText']")), Pattern.compile("[1-9]")));
//        //todo clicking on 'Show me  Results'
   basePage.getVdp().showMeBtn.click();
        //todo using test base method to select checkboxes
        //testBase.checkBoxSelection("123");

        //todo manipulations with header of the car on SRP
        int numberOfCar = 2;
        WebElement headerOfCar = driver.findElement(By.xpath("(//span[@class='srp-list-item-basic-info-model'])[" + numberOfCar + "]"));
        numberOfCar++;
        headerOfCar.click();

     //   testBase.sendToMyPhone();
        testBase.shareHeader();
    }




    //todo DONE READY FOR FEATURE FILE
    @Test
    public void mapsAndDirections() throws InterruptedException {
        BasePage basePage=new BasePage();

        String model="Q3";
        String make="Audi";
        wait.until(ExpectedConditions.elementToBeClickable(basePage.getFollowBtnPage().findAUsedCarBtn)).click();
        //for(int i=1;i<2;i++) {
        Thread.sleep(2000);

        //todo Clicking to choose a make
        List <WebElement> makes =driver.findElements(By.xpath("//select[@name='make']/optgroup[@label='Popular Makes']/option"));
        for(WebElement temp :makes){
            if(temp.getText().trim().equals(make)){
                temp.click();
                break;
            }

        }
        //todo clicking to choose a make
        Thread.sleep(1000);
        //wait.until(ExpectedConditions.elementToBeClickable(driver.findElement(By.xpath("//select[@name='model']/optgroup[@label='Current Models']"))));
        List <WebElement> models =driver.findElements(By.xpath("//select[@name='model']/optgroup[@label='Current Models']/option"));
        System.out.println("models = " + models.size());
        for(WebElement temp :models){
            if(temp.getText().trim().equals(model)){
                temp.click();
                break;
            }

        }
//todo clicking on zipcode
        basePage.getFollowBtnPage().zipCodeMainPage.click();
        basePage.getFollowBtnPage().zipCodeMainPage.sendKeys("22204");
        ///todo clicking onn Next button
        wait.until(ExpectedConditions.elementToBeClickable(basePage.getFollowBtnPage().submitBtn)).click();

//todo clicking on 'Show me Result' button
        wait.until(ExpectedConditions.textMatches((By.xpath("//span[@class='totalRecordsText']")), Pattern.compile("[1-9]")));
//        //todo clicking on 'Show me  Results'
        basePage.getFollowBtnPage().showMeBtn.click();


        //todo manipulations with header of the car on SRP
        int numberOfCar = 2;
        WebElement headerOfCar = driver.findElement(By.xpath("(//span[@class='srp-list-item-basic-info-model'])[" + numberOfCar + "]"));
        numberOfCar++;
        headerOfCar.click();







        Set<String> windows = driver.getWindowHandles();
        for(String window : windows){
            if(driver.switchTo().window(window).getCurrentUrl().contains("vehicle")) {
                System.out.println(driver.getTitle());break;}
        }
        WebElement length=driver.findElement(By.xpath("//*[@id=\"react-app\"]/div/div[1]/div[2]/div[1]/section[3]/div/div[2]/div[2]/div/div/div[1]"));

        JavascriptExecutor jse = (JavascriptExecutor)driver;
        jse.executeScript("arguments[0].scrollIntoView(true);",length);
        basePage.getMapAndDirections().mapAndDirectionVDP.click();


        Set<String> mapWindow = driver.getWindowHandles();
        for(String map : mapWindow){
            if(driver.switchTo().window(map).getCurrentUrl().contains("map")) {
                System.out.println(driver.getTitle());break;}
        }

        WebElement searchForm=driver.findElement(By.xpath("//*[@id=\"react-app\"]/div/div[1]/div[2]/div[1]/div[4]/div[1]/div/div/div/div/span"));
jse.executeScript("arguments[0].scrollIntoView(true);",searchForm);


String address=faker.address().streetAddress();
        System.out.println(address);
String state1="Arizona";
        basePage.getMapAndDirections().locationSign.isDisplayed();
        basePage.getMapAndDirections().phoneNumberSign.isDisplayed();
        basePage.getMapAndDirections().addressField.click();
      basePage.getMapAndDirections().addressField.sendKeys(address);



    List<WebElement> state=driver.findElements(By.xpath("//select[@name='state']/option"));
        System.out.println("state = " + state.size());
        for(WebElement statePick :state){
            if(statePick.getText().trim().equals(state1)){
                statePick.click();
                break;
            }

        }


        basePage.getMapAndDirections().zipCode.click();
        basePage.getMapAndDirections().zipCode.sendKeys("22201");
        wait.until(ExpectedConditions.elementToBeClickable(basePage.getMapAndDirections().getDirections)).click();

        Assert.assertTrue(driver.findElement(By.cssSelector("div[jstcache='23']")).isDisplayed());

        jse.executeScript("window.scrollBy(0,-600)");
        wait.until(ExpectedConditions.visibilityOf(basePage.getMapAndDirections().mobileSign));
     wait.until(ExpectedConditions.visibilityOf(basePage.getSendToMyPhone().sendToMyPhoneHeader)).isDisplayed();
     Assert.assertTrue(basePage.getFindDealerPage().dealerLocation.isDisplayed());
     Assert.assertTrue(basePage.getFindDealerPage().dealerName.isDisplayed());
     Assert.assertTrue(driver.getCurrentUrl().contains("map"));




    }
}
package com.carfax_ucl.step_definitions;

import com.carfax_ucl.utilities.ConfigurationReader;
import com.carfax_ucl.utilities.Driver;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import java.util.concurrent.TimeUnit;

public class Hooks {

    public static WebDriver driver=Driver.get();
    @Before
    public static void setUp() {
        System.out.println("Setting up before hooks");
        Driver.get().get(ConfigurationReader.get("url"));
        Driver.get().manage().timeouts().implicitlyWait(4, TimeUnit.SECONDS);
        System.out.println("Hookes ended");
    }
   @After
    public static void tearDown(Scenario scenario){
        System.out.println("After Hooks");
        if(scenario.isFailed()){
            final byte[] screenshots=((TakesScreenshot)Driver.get()).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshots,"image/png");
        }

        Driver.closeDriver();
    }
}

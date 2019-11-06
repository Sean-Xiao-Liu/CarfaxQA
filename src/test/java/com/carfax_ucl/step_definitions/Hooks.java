package com.carfax_ucl.step_definitions;

import com.carfax_ucl.utilities.ConfigurationReader;
import com.carfax_ucl.utilities.Driver;
import cucumber.api.Scenario;
import org.junit.After;
import org.junit.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.util.concurrent.TimeUnit;

public class Hooks {




    @Before
    public static void setUp(){

        System.out.println(" Setting up before hooks");
        Driver.get().get(ConfigurationReader.get("url"));
        Driver.get().manage().timeouts().implicitlyWait(4, TimeUnit.SECONDS);

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

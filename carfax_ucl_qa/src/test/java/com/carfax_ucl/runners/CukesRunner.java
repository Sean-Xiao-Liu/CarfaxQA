package com.carfax_ucl.runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)



@CucumberOptions(
        plugin = {"html:target/default-cucumber-reports",
                "json:target/cucumber.json",
                "rerun:target.rerun.txt"},
        features = "src/test/resources/com/carfax/features",
        glue = {"com/carfax_ucl/step_definitions"},
         tags = "@m&d-1" ,
        dryRun = false
)
public class CukesRunner {
}

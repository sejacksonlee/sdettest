package sdettest.test;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(format = {"pretty", "html:target/cucumber"},
        features = "src/test/java/sdettest/features",
        glue = "src/test/java/sdettest/stepDefinitions")
        //tags ={"@Webdriver"})

public class runTest { }
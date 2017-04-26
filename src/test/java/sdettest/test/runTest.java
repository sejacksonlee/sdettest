package sdettest.test;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"pretty", "html:target/cucumber"},
        features = {"src/test/java/sdettest/features"},
        //glue = {"src/test/java/sdettest/stepdefinitions"})
        glue = {"sdettest.stepdefinitions"},
        tags = "@Chrome") //Here different browsers can be tested

public class runTest { }
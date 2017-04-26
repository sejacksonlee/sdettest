package sdettest.test;

import org.junit.runner.RunWith;
import cucumber.junit.Cucumber;

@RunWith(Cucumber.class)
@Cucumber.Options(format = {"pretty", "html:target/cucumber"},
        features = "src/test/java/sdettest/features",
        glue = "src/test/java/sdettest/stepDeinitions",
        tags ={"@Webdriver"})

public class runTest { }
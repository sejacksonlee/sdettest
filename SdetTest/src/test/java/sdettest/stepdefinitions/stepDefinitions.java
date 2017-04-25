package sdettest.stepdefinitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import sdettest.webpage.FootballBettingPage;

public class stepDefinitions {

    WebDriver driver = null;
    FootballBettingPage footballPage = null;

    @Before
    public void setUp(){
        driver = new FirefoxDriver();
        footballPage = new FootballBettingPage(driver);
    }

    @Given("^I have visited \'([^\"]*)\'$")
    public void Visit_Whitelist_page(String url) {
        footballPage.goToPage(url);
    }

    @Given("^I have visited \'([^\"]*)\'$")
    public void Visit_Football_page(String url) {
        footballPage.goToPage(url);
    }

    @Given("^I have selected \'([^\"]*)\'$")
    public void Select_team(String team) {
        footballPage.selectHomeTeam(team);
    }

    @When("^I place a bet for \'([^\"]*)\' for the home team to win$")
    public void I_enter_bet_as(String bet) {
        footballPage.placeBetForAmountAndCondition(bet);
    }

    @Then("^my bet is placed and the returns are correct$")
    public void Check_bet_is_placed_returns_are_correct() {
        if (footballPage.checkBetIsPlacedAndReturnsAreCorrect())
            System.out.println("Test Pass");
        else
            System.out.println("Test Fails");
    }

    @Then("^the odds are correct$")
    public void Check_odds_are_correct() {

    }

    @After public void cleanUp(){
        driver.close();
    }
}

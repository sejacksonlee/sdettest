package sdettest.webpage;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class FootballBettingPage {
    WebDriver driver = null;
    String bet = null;
    String odds = null;

    public FootballBettingPage (WebDriver driver){
        this.driver=driver;
    }

    public void goToPage(String page) {
        this.driver.navigate().to(page);
    }

    public void selectHomeTeam(String team) {
        //Set the odds - we'll need them for the assert later
        odds = driver.findElement(By.xpath("//*[@data-name='" + team + "']")).getText();

        //click the button
        driver.findElement(By.xpath("//*[@data-name='" + team + "']")).click();
    }

    public void placeBetForAmountAndCondition(String bet) {
        //Set the bet - we'll want it for our assert later
        bet = bet;

        //We know the betslip will have appeared now so find the textbox to put the bet value in
        driver.findElement(By.xpath("//*[@data-ng-model='bet.stake']/input")).sendKeys(bet);
    }

    public boolean checkBetIsPlaced() {

        String returns = driver.findElement(By.id("estimated-returns_")).getText();

        //Have we placed the bet
        return driver.findElement(By.id("mobile-betslip-count")).getText() == "1";
    }

    public boolean checkReturnsAreCorrect() {
        //Work out stake here
    }
    public boolean checkOddsAreCorrect() {
        //Get odds from button
    }

}

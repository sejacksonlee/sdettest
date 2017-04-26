package sdettest.webpage;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class FootballBettingPage {
    WebDriver driver = null;
    String bet = "";
    String odds = "";
    String teamId = "";

    public FootballBettingPage (WebDriver driver){
        this.driver=driver;
    }

    public void goToPage(String page) {
        this.driver.navigate().to(page);
    }

    public void selectHomeTeam(String team) {
        WebElement teamButton = driver.findElement(By.xpath("//*[@data-name='" + team + "']"));

        //Set the odds (found as text on the button) - we'll need them for the assert later
        odds = teamButton.getText();

        //Set the teamId (whether this actually is the team id or not but it does help us find the other elements)
        teamId = teamButton.getAttribute("id").substring(4);

        //click the button
        teamButton.click();
    }

    public void placeBetForAmountAndCondition(String bet) {
        //Set the bet - we'll want it for our assert later
        bet = bet;

        //We know the betslip will have appeared now so find the textbox to put the bet value in
        driver.findElement(By.id("stake-input__" + teamId + "L")).sendKeys(bet);
    }

    public boolean checkBetIsPlaced() {
        //Have we placed the bet
        return driver.findElement(By.id("mobile-betslip-count")).getText() == "1";
    }

    public boolean checkReturnsAreCorrect() {
        //Return whether our textbox with the returns in matches our calculated return field
        return driver.findElement(By.id("estimated-returns_" + teamId + "L")).getText() == calculateReturn();
    }
    public boolean checkOddsAreCorrect() {
        //Betslip odds are exactly what we expect
        return driver.findElement(By.id("bet-price_" + teamId + "L")).getText() == odds;
    }

    private String calculateReturn() {
        //parse the odds string to get the numeric values
        String[] odds = this.odds.split("/");
        Float odds1 = Float.parseFloat(odds[0]);
        Float odds2 = Float.parseFloat(odds[1]);

        Float oddsNumeric = odds1 / odds2;

        //return can be represented as: (odds + 1) * bet i.e. 4/9 = (0.44 + 1) * 0.05 = 0.07
        double betReturn = (oddsNumeric + 1) * Float.parseFloat(bet);

        return String.valueOf(betReturn);
    }

}

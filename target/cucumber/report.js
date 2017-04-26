$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("footballbetting.feature");
formatter.feature({
  "line": 2,
  "name": "Able to place a bet on an English premier league event",
  "description": "",
  "id": "able-to-place-a-bet-on-an-english-premier-league-event",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Firefox"
    },
    {
      "line": 1,
      "name": "@Chrome"
    }
  ]
});
formatter.before({
  "duration": 4038737607,
  "status": "passed"
});
formatter.before({
  "duration": 1084296460,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "As a WH Customer I want the ability to place a bet on a English Premier League event",
  "description": "",
  "id": "able-to-place-a-bet-on-an-english-premier-league-event;as-a-wh-customer-i-want-the-ability-to-place-a-bet-on-a-english-premier-league-event",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I have first visited \u0027http://sports.williamhill.com/sr-admin-set-white-list-cookie.html\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I have visited \u0027http://sports.williamhill.com/betting/en-gb/football/competitions\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I have selected \u0027Arsenal\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I place a bet for \u00270.05\u0027 for the home team to win",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "my bet is placed",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the returns are correct",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the odds are correct",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://sports.williamhill.com/sr-admin-set-white-list-cookie.html",
      "offset": 22
    }
  ],
  "location": "stepDefinitions.Visit_Whitelist_page(String)"
});
formatter.result({
  "duration": 609194421,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Runtime.executionContextCreated has invalid \u0027context\u0027: {\"auxData\":{\"frameId\":\"6817.1\",\"isDefault\":true},\"id\":1,\"name\":\"\",\"origin\":\"://\"}\n  (Session info: chrome\u003d57.0.2987.133)\n  (Driver info: chromedriver\u003d2.9.248307,platform\u003dMac OS X 10.12.4 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 34 milliseconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027Sophies-MBP\u0027, ip: \u00272a02:c7f:3e18:af00:f07e:40b7:7af7:ea58\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.12.4\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, chrome\u003d{userDataDir\u003d/var/folders/cm/hy2q394n41b_h_vwzc07m0g00000gn/T/.org.chromium.Chromium.OCUVXV}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d57.0.2987.133, platform\u003dMAC, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 7b9d69765ab4e986ca97afab03c02998\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:364)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.to(RemoteWebDriver.java:945)\n\tat sdettest.webpage.FootballBettingPage.goToPage(FootballBettingPage.java:18)\n\tat sdettest.stepdefinitions.stepDefinitions.Visit_Whitelist_page(stepDefinitions.java:40)\n\tat ✽.Given I have first visited \u0027http://sports.williamhill.com/sr-admin-set-white-list-cookie.html\u0027(footballbetting.feature:5)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://sports.williamhill.com/betting/en-gb/football/competitions",
      "offset": 16
    }
  ],
  "location": "stepDefinitions.Visit_Football_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Arsenal",
      "offset": 17
    }
  ],
  "location": "stepDefinitions.Select_team(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 19
    }
  ],
  "location": "stepDefinitions.I_enter_bet_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.Check_bet_is_placed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.Check_returns_are_correct()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.Check_odds_are_correct()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 228378470,
  "status": "passed"
});
});
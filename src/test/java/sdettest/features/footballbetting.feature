Feature: Able to place a bet on an English premier league event

  Scenario: As a WH Customer I want the ability to place a bet on a English Premier League event
    Given I have visited 'http://sports.williamhill.com/sr-admin-set-white-list-cookie.html'
    And I have visited 'http://sports.williamhill.com/betting/en-gb/football/competitions'
    And I have selected 'Arsenal'
    When I place a bet for '0.05' for the home team to win
    Then my bet is placed
    And the returns are correct
    And the odds are correct

Feature: Search

Scenario: Successful search with valid results

	Given User launch Chrome browser
	When User opens URL "https://www.google.com/" 
	And enter valid keyword as "Java" in search text field 
	And Click on Search by className "aajZCb"and Select from list by "OBMEnb" and verify keyword as "java"
	Then search results are displayed


Scenario Outline: Successful search with valid results

	Given User launch Chrome browser
	When User opens URL "<URL>" 
	And enter valid keyword as "<keyword>" in search text field 
	And Click on Search by className "<classname>"and Select from list by "<listname>" and verify keyword as "<keyword>"
	Then search results are displayed
	
Examples:
	|URL|keyword|classname|listname|keyword|
	|https://www.google.com/|Java|aajZCb|OBMEnb|java|
	|https://www.google.com/|B23%|aajZCb|OBMEnb|B23%|
	|https://www.bing.com/|123|sa_drw|sa_sg|123|
	|https://www.bing.com/|Java test|sa_drw|sa_sg|Java test|
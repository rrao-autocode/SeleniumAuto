$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/Search.feature");
formatter.feature({
  "name": "Search",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Successful search with valid results",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_launch_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"https://www.google.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter valid keyword as \"Java\" in search text field",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.enter_valid_keyword_as_in_search_text_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search by className \"aajZCb\"and Select from list by \"OBMEnb\" and verify keyword as \"java\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_Search_by_className_and_Select_from_list_by_and_verify_keyword_as(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "search results are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.search_results_are_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Successful search with valid results",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "name": "User opens URL \"\u003cURL\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "enter valid keyword as \"\u003ckeyword\u003e\" in search text field",
  "keyword": "And "
});
formatter.step({
  "name": "Click on Search by className \"\u003cclassname\u003e\"and Select from list by \"\u003clistname\u003e\" and verify keyword as \"\u003ckeyword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "search results are displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "URL",
        "keyword",
        "classname",
        "listname",
        "keyword"
      ]
    },
    {
      "cells": [
        "https://www.google.com/",
        "Java",
        "aajZCb",
        "OBMEnb",
        "java"
      ]
    },
    {
      "cells": [
        "https://www.google.com/",
        "B23%",
        "aajZCb",
        "OBMEnb",
        "B23%"
      ]
    },
    {
      "cells": [
        "https://www.bing.com/",
        "123",
        "sa_drw",
        "sa_sg",
        "123"
      ]
    },
    {
      "cells": [
        "https://www.bing.com/",
        "Java test",
        "sa_drw",
        "sa_sg",
        "Java test"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Successful search with valid results",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_launch_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"https://www.google.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter valid keyword as \"Java\" in search text field",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.enter_valid_keyword_as_in_search_text_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search by className \"aajZCb\"and Select from list by \"OBMEnb\" and verify keyword as \"Java\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_Search_by_className_and_Select_from_list_by_and_verify_keyword_as(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "search results are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.search_results_are_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successful search with valid results",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_launch_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"https://www.google.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter valid keyword as \"B23%\" in search text field",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.enter_valid_keyword_as_in_search_text_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search by className \"aajZCb\"and Select from list by \"OBMEnb\" and verify keyword as \"B23%\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_Search_by_className_and_Select_from_list_by_and_verify_keyword_as(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "search results are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.search_results_are_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successful search with valid results",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_launch_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"https://www.bing.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter valid keyword as \"123\" in search text field",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.enter_valid_keyword_as_in_search_text_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search by className \"sa_drw\"and Select from list by \"sa_sg\" and verify keyword as \"123\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_Search_by_className_and_Select_from_list_by_and_verify_keyword_as(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "search results are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.search_results_are_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successful search with valid results",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_launch_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"https://www.bing.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter valid keyword as \"Java test\" in search text field",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.enter_valid_keyword_as_in_search_text_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search by className \"sa_drw\"and Select from list by \"sa_sg\" and verify keyword as \"Java test\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_Search_by_className_and_Select_from_list_by_and_verify_keyword_as(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "search results are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.search_results_are_displayed()"
});
formatter.result({
  "status": "passed"
});
});
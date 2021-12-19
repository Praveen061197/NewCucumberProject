$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/login.feature");
formatter.feature({
  "name": "To validate Login functionality of fb application",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user need to be in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition1.user_need_to_be_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login with empty username and empty password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "user will clicks login button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition2.user_will_clicks_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will navigate to invalid credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition2.user_will_navigate_to_invalid_credential_page()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat org.steps.StepDefinition2.user_will_navigate_to_invalid_credential_page(StepDefinition2.java:25)\r\n\tat ✽.user will navigate to invalid credential page(file:src/test/resources/Features/login.feature:19)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/product.feature");
formatter.feature({
  "name": "To validate the search functionality of amazon page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To check the product page using search feature",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user need to be in amazon page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition3.user_need_to_be_in_amazon_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will enter product name in search box",
  "rows": [
    {
      "cells": [
        "Product"
      ]
    },
    {
      "cells": [
        "iphone"
      ]
    },
    {
      "cells": [
        "mac laptop"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition3.user_will_enter_product_name_in_search_box(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks search button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition3.user_clicks_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will redirect to product page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition3.user_will_redirect_to_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
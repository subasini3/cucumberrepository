$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/FeatureFiles/FaceBookLogin.feature");
formatter.feature({
  "name": "To validate login functionality of facebook",
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
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user should launch the chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "FacebookLoginStepDef.the_user_should_launch_the_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person should type the url",
  "keyword": "When "
});
formatter.match({
  "location": "FacebookLoginStepDef.the_person_should_type_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should maximize the window",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookLoginStepDef.the_user_should_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "validate with invalid username and invalid password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "The user should type the invalid username and invalid passwords",
  "rows": [
    {
      "cells": [
        "first",
        "last",
        "user",
        "pass",
        "data",
        "storage"
      ]
    },
    {
      "cells": [
        "suba",
        "jui",
        "aaa",
        "jasdi",
        "sdsf",
        "sfi"
      ]
    },
    {
      "cells": [
        "sur",
        "jwww",
        "sya",
        "jiwgh",
        "sjuii",
        "weeee"
      ]
    },
    {
      "cells": [
        "hi",
        "ppp",
        "serr",
        "nnjj",
        "qqwe",
        "mkkk"
      ]
    },
    {
      "cells": [
        "ggg",
        "ji",
        "adfgg",
        "nmhjh",
        "qwqerw",
        "hgjy"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FacebookLoginStepDef.the_user_should_type_the_invalid_username_and_invalid_passwords(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookLoginStepDef.the_user_should_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should get the title of the incorrect credential page",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookLoginStepDef.the_user_should_get_the_title_of_the_incorrect_credential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should navigate to incorrect credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookLoginStepDef.the_user_should_navigate_to_incorrect_credential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "validate with invalid username and valid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user should type the invalid username\"\u003cuser\u003e\" and valid password\"\u003cpass\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "The user should click the login button",
  "keyword": "And "
});
formatter.step({
  "name": "The user should get the cuurent url of the incorrect credential page",
  "keyword": "And "
});
formatter.step({
  "name": "The user should navigate to incorrect credential page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user",
        "pass"
      ]
    },
    {
      "cells": [
        "java",
        "123"
      ]
    },
    {
      "cells": [
        "sql",
        "345"
      ]
    },
    {
      "cells": [
        "c++",
        "35"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user should launch the chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "FacebookLoginStepDef.the_user_should_launch_the_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person should type the url",
  "keyword": "When "
});
formatter.match({
  "location": "FacebookLoginStepDef.the_person_should_type_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should maximize the window",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookLoginStepDef.the_user_should_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "validate with invalid username and valid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user should type the invalid username\"java\" and valid password\"123\"",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookLoginStepDef.the_user_should_type_the_invalid_username_and_valid_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookLoginStepDef.the_user_should_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should get the cuurent url of the incorrect credential page",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookLoginStepDef.the_user_should_get_the_cuurent_url_of_the_incorrect_credential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should navigate to incorrect credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookLoginStepDef.the_user_should_navigate_to_incorrect_credential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user should launch the chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "FacebookLoginStepDef.the_user_should_launch_the_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person should type the url",
  "keyword": "When "
});
formatter.match({
  "location": "FacebookLoginStepDef.the_person_should_type_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should maximize the window",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookLoginStepDef.the_user_should_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "validate with invalid username and valid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user should type the invalid username\"sql\" and valid password\"345\"",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookLoginStepDef.the_user_should_type_the_invalid_username_and_valid_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookLoginStepDef.the_user_should_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should get the cuurent url of the incorrect credential page",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookLoginStepDef.the_user_should_get_the_cuurent_url_of_the_incorrect_credential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should navigate to incorrect credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookLoginStepDef.the_user_should_navigate_to_incorrect_credential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user should launch the chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "FacebookLoginStepDef.the_user_should_launch_the_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person should type the url",
  "keyword": "When "
});
formatter.match({
  "location": "FacebookLoginStepDef.the_person_should_type_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should maximize the window",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookLoginStepDef.the_user_should_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "validate with invalid username and valid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user should type the invalid username\"c++\" and valid password\"35\"",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookLoginStepDef.the_user_should_type_the_invalid_username_and_valid_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookLoginStepDef.the_user_should_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should get the cuurent url of the incorrect credential page",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookLoginStepDef.the_user_should_get_the_cuurent_url_of_the_incorrect_credential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should navigate to incorrect credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookLoginStepDef.the_user_should_navigate_to_incorrect_credential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/FeatureFiles/ForgetPassword.feature");
formatter.feature({
  "name": "To validate the forget password feature in the facebook page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "verify the forget password functionality",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user should launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "ForgetPasswStepDef.the_user_should_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person should load the url",
  "keyword": "When "
});
formatter.match({
  "location": "ForgetPasswStepDef.the_person_should_load_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should maximize the window",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookLoginStepDef.the_user_should_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should click the forget password link",
  "keyword": "And "
});
formatter.match({
  "location": "ForgetPasswStepDef.the_user_should_click_the_forget_password_link()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027Forgotten password\u0027]\"}\n  (Session info: chrome\u003d95.0.4638.69)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-AUNJ68Q\u0027, ip: \u0027192.168.43.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_301\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 95.0.4638.69, chrome: {chromedriverVersion: 95.0.4638.54 (d31a821ec901f..., userDataDir: C:\\Users\\welcome\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:58640}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 4f8c86ba3c56e8a087787f245945ea50\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027Forgotten password\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.stepdef.ForgetPasswStepDef.the_user_should_click_the_forget_password_link(ForgetPasswStepDef.java:28)\r\n\tat ✽.The user should click the forget password link(file:src/test/resources/FeatureFiles/ForgetPassword.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The user should navigate to find your account page",
  "keyword": "And "
});
formatter.match({
  "location": "ForgetPasswStepDef.the_user_should_navigate_to_find_your_account_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user should type the registered mobile number and email id",
  "keyword": "And "
});
formatter.match({
  "location": "ForgetPasswStepDef.the_user_should_type_the_registered_mobile_number_and_email_id()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user should click the search button",
  "keyword": "And "
});
formatter.match({
  "location": "ForgetPasswStepDef.the_user_should_click_the_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user should navigate to reset your password page",
  "keyword": "Then "
});
formatter.match({
  "location": "ForgetPasswStepDef.the_user_should_navigate_to_reset_your_password_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
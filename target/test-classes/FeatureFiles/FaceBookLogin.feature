
Feature: To validate login functionality of facebook
Background:
Given The user should launch the chrome browser
When The person should type the url
And The user should maximize the window


Scenario: validate with invalid username and invalid password

And The user should type the invalid username and invalid passwords
                |first|last|user|pass|data|storage|
                |suba|jui|aaa|jasdi|sdsf|sfi|
                 |sur|jwww|sya|jiwgh|sjuii|weeee|
                 |hi|ppp|serr|nnjj|qqwe|mkkk|
                 |ggg|ji|adfgg|nmhjh|qwqerw|hgjy|
                 
                
                
And The user should click the login button
And The user should get the title of the incorrect credential page
Then The user should navigate to incorrect credential page

Scenario Outline: validate with invalid username and valid password

           

And The user should type the invalid username"<user>" and valid password"<pass>"
And The user should click the login button
And The user should get the cuurent url of the incorrect credential page
Then The user should navigate to incorrect credential page

Examples:

|user|pass|
|java|123|
|sql|345|
|c++|35|





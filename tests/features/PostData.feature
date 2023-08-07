@post @postData
Feature: Post Data to endpoint path /posts

    As a QA,
    I want to make sure the API is working

    Background:
        Given A POST API endpoint
    
    Scenario: Tha API response should be HTTP 201 Created
        When I send POST request to /posts
        Then I get response HTTP 201 Created

    Scenario: The API response body matches the JSON Schema
        When I send POST request to /posts
        Then I get response body matches with the Schema for POST request

    Scenario Outline: The <key> value is accept <condition> String
        When I send POST request to /posts using request <payload>
        Then I get response body that has <key> value that is <condition> String

        Examples:
            | key   | condition | payload |
            | title | non-empty | {"title":"recommendation","body":"motorcycle","userId":12} |
            | body  | non-empty | {"title":"recommendation","body":"motorcycle","userId":12} |
            | title | empty     | {"title":"","body":"motorcycle","userId":12} |
            | body  | empty     | {"title":"recommendation","body":"","userId":12} |

    Scenario Outline: The userId value is accept <condition> Integer
        When I send POST request to /posts using request <payload>
        Then I get response body that has userId value that is a <condition> Integer

        Examples:
            | condition | payload |
            | positive  | {"title":"recommendation","body":"motorcycle","userId":12} |
            | negative  | {"title":"recommendation","body":"motorcycle","userId":-12} |
            | zero      | {"title":"recommendation","body":"motorcycle","userId":0} |

    Scenario Outline: The API response body has a valid key value as inputed payload
        When I send POST request to /posts using request <payload>
        Then I get response body that has a valid key value as inputed payload

        Examples:
            | payload |
            | {"title":"recommendation","body":"motorcycle","userId":12} |
            | {"title":"new","body":"movie","userId":123} |
            | {"title":"information","body":"hello world","userId":-12} |
            | {"title":"12345","body":"12345","userId":0} |
            | {"title":"!@#$%^&*()_+","body":"!@#$%^&*()_+","userId":0} |
            | {"title":"abc123!@#","body":"abc123!@#","userId":0} |
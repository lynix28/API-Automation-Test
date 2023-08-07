@get @getData
Feature: Get Data from endpoint path /posts

    As a QA,
    I want to make sure the API is working

    Background:
        Given A GET API endpoint
        When I send GET request to /posts
    
    Scenario: The API response should be HTTP 200 OK
        Then I get response HTTP 200 OK

    Scenario: The API response should be an Array
        Then I get response body as an Array

    Scenario: The API response body has at least one element
        Then I get response body has at least one element

    Scenario: The API response body matches the JSON Schema
        Then I get response body matches with the Schema for GET request

    Scenario Outline: Each element in the response body has <key> field that is <type>
        Then I get response body has <key> field that is an <type>

        Examples:
            | key    | type    |
            | userId | Integer |
            | id     | Integer |
            | title  | String  |
            | body   | String  |

    Scenario Outline: The <key> is a non-negative integer for each element in the response body
        Then I get response body has <key> that is a non-negative Integer

        Examples:
            | key    |
            | userId |
            | id     |

    Scenario Outline: The <key> values are unique in the response body
        Then I get response body has unique <key> values

        Examples:
            | key    |
            | id     |
            | userId |
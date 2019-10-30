Feature: 
  As a user I want to search a book by Title

  Scenario: Search for book by Title
    Given I am on the Main Page
    And I search a book by Title "Test Title" on the search bar
    Then I should see the book "Test Title" displayed

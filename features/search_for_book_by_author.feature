Feature: 
  As a user I want to search a book by Author

  Scenario: Search for book by Author
    Given I am on the Main Page
    And I search a book by Author "Test_Author" on the search bar
    Then I should see the Author "Test_Author" displayed

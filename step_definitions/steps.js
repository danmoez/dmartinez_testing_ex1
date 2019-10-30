const { I, search_results, main_page } = inject();
// Add in your custom step files

Given('I have a defined step', () => {
  // TODO: replace with your own step
});

Given('I am on the Main Page', () => {
  main_page.main_page_visible();
});

Given('I search a book by Author {string} on the search bar', (test_author) => {
  // From "features/search_for_book_by_author.feature" {"line":6,"column":5}
  main_page.search(test_author);
});

Then('I should see the Author {string} displayed', (test_author) => {
  // From "features/search_for_book_by_author.feature" {"line":7,"column":5}
  search_results.verify_author(test_author);
});

Given('I search a book by Title {string} on the search bar', (test_title) => {
  // From "features/search_for_book_by_title.feature" {"line":6,"column":5}
  main_page.search(test_title)
});

Then('I should see the book {string} displayed', (test_title) => {
  // From "features/search_for_book_by_title.feature" {"line":7,"column":5}
  search_results.verify_author(test_title);
});

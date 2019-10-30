const { I } = inject();
// Add in your custom step files

Given('I have a defined step', () => {
  // TODO: replace with your own step
});

Given('I am on the Main Page', () => {
  I.amOnPage('http://localhost/index.html');
  I.waitForElement('title', 5);
  I.see('Library Page', 'title');
});

Given('I search a book by Author {string} on the search bar', (test_author) => {
  // From "features/search_for_book_by_author.feature" {"line":6,"column":5}
  I.fillField({id: 'search_bar'}, '');
  I.fillField({id: 'search_bar'}, test_author);
  I.pressKey("Enter");
});

Then('I should see the Author {string} displayed', (test_author) => {
  // From "features/search_for_book_by_author.feature" {"line":7,"column":5}
  I.waitForElement('.title', 5);
  I.see(test_author, {class: 'author'});
});

Given('I search a book by Title {string} on the search bar', (test_title) => {
  // From "features/search_for_book_by_title.feature" {"line":6,"column":5}
  I.fillField({id: 'search_bar'}, '');
  I.fillField({id: 'search_bar'}, test_title);
  I.pressKey("Enter");
});

Then('I should see the book {string} displayed', (test_title) => {
  // From "features/search_for_book_by_title.feature" {"line":7,"column":5}
  I.waitForElement('.title', 5);
  I.see(test_title, {class: 'test_title'});
});

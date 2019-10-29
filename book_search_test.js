
Feature('Book search');

Scenario('Perform a Book Search', (I) => {
  I.amOnPage('https://localhost/index.html');
  I.see(title , '.ticket-item');
  I.fillField('Username', '');

});

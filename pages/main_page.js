const { I } = inject();

module.exports = {

  // insert your locators
  	main_page: {
    	search_bar: "#search_bar",
    	title: ".title"
  	},

 // insert methods

 async main_page_visible() {
    I.amOnPage('http://localhost/index.html');
  	I.waitForElement(main_page.title, 5);
  	I.see('Library Page', main_page.title);
  },

 async search(property) {
    I.fillField(this.main_page.search_bar, "");
    I.fillField(this.main_page.search_bar, property);
    I.pressKey("Enter");
  },

}

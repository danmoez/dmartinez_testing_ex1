const { I } = inject();

module.exports = {

  // insert your locators 
  	search_results: {
    	author: ".search_bar",
    	title: ".title",
  	},



  //and methods here

 async verify_author(property) {
    I.waitForElement(search_results.author, 5);
  	I.see(test_author, search_results.author);
  },

 async verify_title(property) {
    I.waitForElement(search_results.title, 5);
  	I.see(test_author, search_results.title);
  },

}

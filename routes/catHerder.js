var cat = require('../models/cats');
var colors = ['black', 'white', 'tabby', 'orange', 'unicaticorn'];
// functions go here

module.exports = {
// Route for /cats/new
  newCat: function(req,res) {
    // catAge = Math.round(Math.random() * 10);
    // console.log(catAge);
    // console.log('boop');

    // var Cat = new cat ({
    //   age: catAge
    // });

    // Cat.save(function (err) {
		//   if (err) {
		//     console.log("Problem saving your cats :(", err);
		//   }
		// });

    res.render("newCat", {
      header_text: "a new cat",
      cat_name: 'boop',
      cat_color: 'blue',
      cat_age: '9'
    });
  },

  // Route for /cats which lists cats by age
  cats: function(req, res) {

  },

  // Route for /cats/bycolor/:color which sorts the a list of cats of a specific color by age
  catsColor: function(req, res) {

  },

  // Route /cats/delete/old which deletes the oldest cat by color
  deleteCat: function(req, res) {

  }
}

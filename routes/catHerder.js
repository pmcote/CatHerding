var cat = require('../models/cats');
var colors = ['black', 'white', 'tabby', 'orange', 'unicaticorn', 'purple'];
var generateName = require('sillyname');
// functions go here
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = {
// Route for /cats/new
  newCat: function(req,res) {
    var catAge = Math.round(Math.random() * 10);
    var catName = generateName();
    var catColor = colors[getRandomInt(0, colors.length)];


    var Cat = new cat ({
      age: catAge,
      name: catName,
      color: catColor
    });

    Cat.save(function (err) {
		  if (err) {
		    console.log("Problem saving your cats :(", err);
		  }
		});

    res.render("newCat", {
      header_text: "a new cat",
      cat_name: catName,
      cat_color: catColor,
      cat_age: catAge
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

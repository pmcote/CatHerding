var home = function(req, res){
  res.render("home", {header_text: "Welcome to Introduction To Herding Internet Cats with Node.js"});
};

module.exports.home = home;

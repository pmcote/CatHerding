// Hurrah for imports!
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

// Set up routes
var index = require('./routes/index');
var catHerder = require('./routes/catHerder');

// Set up express application and port
var app = express();
var port = process.env.PORT || 3000;

// Set up mongoose database link
var db = require('./db');

// Setting up basic logging functionality and path
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/', index.home);
app.get('/cats/new', catHerder.newCat);
app.get('/cats', catHerder.cats);
// app.get('/cats/:color', catHerder.catsColor);
// app.get('/cats/delete/old', catHerder.delete);

app.listen(port);

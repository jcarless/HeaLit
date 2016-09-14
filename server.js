// Include Server Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 3007;

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));

// set up handlebars for express
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
    extname: '.handlebars',
    layoutsDir: 'app/views/layouts'
}));
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/app/views');

// MongoDB Configuration configuration
mongoose.connect('mongodb://admin:heal@ds019866.mlab.com:19866/healit');
var db = mongoose.connection;

db.on('error', function (err) {
    console.log('Mongoose Error: ', err);
});

db.once('open', function () {
    console.log('Mongoose connection successful.');
});
// --------------------------------------------------

app.listen(PORT, function() {
    console.log("HeaLit is running on PORT: " + PORT);
});

//routing
require("./app/Routes/routes.js")(app);

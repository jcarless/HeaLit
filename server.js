// Include Server Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

//Require Schemas
// var Article = require('./server/model.js');

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

// -------------------------------------------------

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

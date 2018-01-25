var express       = require('express');
var bodyParser    = require('body-parser');
var admin = require('firebase-admin');
var serviceAccount = require('/home/loay/Downloads/loginse-93ca4-firebase-adminsdk-yy9wo-d559a1955d.json');

var app           = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
require('./routes/login.js')(app);

module.exports = app;

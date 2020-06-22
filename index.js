//CLI: npm install express ejs body-parser express-session --save
var express = require('express');
var app = express();
var path = require('path')
app.listen(process.env.PORT || 5000);
// middlewares
var favicon = require('serve-favicon');
app.use(favicon(path.join('public', 'favicon.ico')));
app.use(express.static('public'));
app.use(express.static('images'));
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var session = require('express-session');
app.use(session({ secret: "sonkk@123" }));
app.use(function (req, res, next) { // this middleware makes templates accessible session variables
  res.locals.session = req.session;
  next();
});
// template engine
app.set('view engine', 'ejs');
// controllers
app.use('/', require('./controllers/customer.js'));
app.use('/admin', require('./controllers/admin.js'));
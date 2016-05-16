var express = require('express');

var handlebars = require('express-handlebars').create({ defaultLayout: 'main' });
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var path       = require('path');
var fs         = require('fs'); 

var app = express();
console.log("created app");
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
console.log("created handlebars");
app.use(express.static(__dirname + 'public'));
app.set('port', process.env.PORT || 3000);
console.log("created  port ");
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/hero-stories');
var db = mongoose.connection;
console.log("created mongoose connection");


fs.readdirSync('./controllers').forEach(function (file) {
  if (file.substr(-3) === '.js') {
    var route = require('./controllers/' + file);
    route.controller(app);
  }
});


app.get('/', function(req, res) {
  res.send("Home page")
});

app.listen(app.get('port'), function() {
  console.log("server started on PORT:" + app.get('port'));
}); 
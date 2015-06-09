var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('home.html');
});

app.get('/portfolio', function(req, res) {
  res.render('portfolio.html');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

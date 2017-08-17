var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var app = express();
app.use(morgan('combined'));
var config = {
    user: 'vpsarav',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: 'db-vpsarav-83486',
    database: 'vpsarav'
};

var pool = new Pool(config);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/test-db', function(req,res){
   pool.query("SELECT * FROM test", function(err, result){
       if(err){
           res.status(500).send(err.toString());
       } else {
           res.send(JSON.stringify(result));
       }
   });
});

app.get('/FirstPage.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'FirstPage.html'));
});

app.get('/SecondPage', function (req, res) {
  res.sendFile(path.join(__dirname,'ui', 'SecondPage.html'));
});

app.get('/ThirdPage', function (req, res) {
  res.send('ThirdPage will be displayed here');
});

app.get('/ui/main.js', function(req, res){
    //res.send('Main.js will be displayed here');
    res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var counter = 0;
app.get('/counter', function(req,res){
    counter = counter + 1;
    res.send(counter.toString());
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/kid.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'kid2.png'));
});

app.get('/ui/elephant.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Ele1.jpg'));
});


app.get('/ui/FirstPage', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'FirstPage.html'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');

// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const express = require('express');

const bodyParser = require('body-parser');

var mysql = require('mysql')

const app = express();
var path = require('path')


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'hoteldata'

});

connection.connect(function (err) {

  if (err) throw err;

  console.log('connected..');
})



app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug')


app.get('/', (req, res) => {
  res.sendFile('index.html', { root: "F:\\node" });
});

app.get('/index.html', (req, res) => {
  res.sendFile('index.html', { root: "F:\\node" });
});

app.get('/about.html', (req, res) => {
  res.sendFile('about.html', { root: "F:\\node" });
});

app.get('/contact.html', (req, res) => {
  res.sendFile('contact.html', { root: "F:\\node" });
});

app.get('/pricing.html', (req, res) => {
  res.sendFile('pricing.html', { root: "F:\\node" });
});

app.get('/portfolio-overview.html', (req, res) => {
  res.sendFile('portfolio-overview.html', { root: "F:\\node" });
});

app.get('/portfolio-item.html', (req, res) => {
  res.sendFile('portfolio-item.html', { root: "F:\\node" });
});


app.get('/feedback.html', (req, res) => {
  res.sendFile('feedback.html', { root: "F:\\node" });
});

app.get('/blog-home.html', (req, res) => {
  res.sendFile('blog-home.html', { root: "F:\\node" });
});


app.get('/menu.html', (req, res) => {
  res.sendFile('menu.html', { root: "F:\\node" });
});


app.get('/timings.html', (req, res) => {
  res.sendFile('timings.html', { root: "F:\\node" });
});




app.post('/submit', function (req, res) {
  console.log(req.body);

  var sql = "insert into contact values('"+ req.body.fname + "','" + req.body.email +"',"+ req.body.phoneno +",'"+ req.body.message +"')";
  connection.query(sql, function(err, rows, fields){


    if (err) throw err;

    res.render('index', { title: 'data saved', message: 'Your Response has been taken . Thank You!.' })

    
   
  })

  

})


//for feedback from
app.post('/feed', function (req, res) {
  console.log(req.body);

  var sql1 = "insert into feedback values('"+ req.body.fullname + "'," + req.body.number +",'"+ req.body.message +"')";
  connection.query(sql1, function(err, rows, fields){


    if (err) throw err;

    res.render('index', { title: 'data saved', message: ' Your Response has been taken . Thank You!..' })


  })

    connection.end();

})



app.listen(3000)
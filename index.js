
const express = require('express')
const app = express()

const mysql = require('mysql') 

const path = require('path')

const helmet = require('helmet')
app.use(helmet())

const ejs = require('ejs')
app.set('view engine', 'ejs')

// ejsLint(, options);

var port = process.env.PORT || 3000;

var server = app.listen(port, function(){
  console.log('listening on :' + port);
});

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

// Actual fields to be added according to the form

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  var sqlDb = "CREATE DATABASE db"
  var sqlTable = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255))";

  con.query(sqlDb, function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });

  con.query(sqlTable, (err,result) => {
  	if (err) throw err;
  	console.log("Table created")
  })

});

app.get('/rulebook', (req,res) => {

	res.download('/rulebook.pdf')

})

app.post('/register', (req,res) => {

	con.connect(function(err) {

  	if (err) throw err;
  	console.log("Connected!");

  	var sql = "INSERT INTO customers (name, email) VALUES (req.body.name , req.body.email )";

  	con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

	res.render('goTohomePage')

})
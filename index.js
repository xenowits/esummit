
const express = require('express')
const app = express()

const path = require('path')

const helmet = require('helmet')

// ejsLint(, options);

var port = process.env.PORT || 3000;

var server = app.listen(port, function(){
  console.log('listening on :' + port);
});

app.use(helmet())

app.get('/rulebook', (req,res) => {

	res.download('/rulebook.pdf')

})

app.post('/register', (req,res) => {

	res.send("you are successfully registered")


})
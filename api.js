var exports = module.exports = {};

const string_square = require('./string_square').string_square

const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ msg: 'Hello world!' });
});

app.get('/square', (req, res) => {
   var x = string_square(req.query.string)
   res.send("{\"result\":\""+x+"\"}")
})

var server = app.listen(PORT, () => console.log('Example app listening on port '+ PORT))

exports.app = app;
exports.server = server;

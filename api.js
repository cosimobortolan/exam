const string_square = require('./string_square').string_square

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/square', (req, res) => {
   var x = string_square(req.query.string)
   res.send("{\"result\":\""+x+"\"}")
})

app.listen(PORT, () => console.log('Example app listening on port '+ PORT))

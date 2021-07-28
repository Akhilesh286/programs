var express = require('express')
var app = express()

app.post('/', function (req, res) {
  console.log("hai")
  res.send('POST request to the homepage')
})
app.listen(4004)

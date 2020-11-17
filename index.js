const http = require('http');
var express = require('express');

var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port, (err) => {
  console.log('Server  is listening on 3000');
});

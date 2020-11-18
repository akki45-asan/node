const http = require('http');
var express = require('express');
const port = process.env.PORT || 3010;
const server = http.createServer(app);

var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});

server.listen(port, (err) => {
  console.log('Server  is listening on 3010');
});

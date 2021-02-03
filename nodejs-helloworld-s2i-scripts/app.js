var express = require('express');
const fs = require('fs')
app = express();

app.get('/', function (req, res) {
  res.send('Hello World from nodejs s2i scripts !\n');
});

app.get('/my-file', function (req, res) {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('my-file.html').pipe(res)
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

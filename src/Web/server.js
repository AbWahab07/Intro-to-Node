var fs = require('fs');
var http = require('http');

var hostname = '127.0.0.1';
var port = 3000;

http.createServer((req, res) => {
    res.writeHead(200, {'Content-type' : 'text-plain'});
    if (req.url === '/file.txt') {
      fs.createReadStream(__dirname + '/file.txt').pipe(res);
    } else {
      res.end('Hello World');
    }
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

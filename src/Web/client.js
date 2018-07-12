// http doesn't handles redirects automatically. however, third-party request module handles redirects automatically.
var http = require('http');

var options = {
  host: 'www.google.com',
  port: 80,
  path: '/',
  method: 'GET'
};

console.log("Going to make request...");

/*
request with string url

var req = http.request('http://www.google.com/', (res) => {
    console.log(res.statusCode);
    res.pipe(process.stdout);
});
*/

/*
request with options array

var req = http.request(options, (res) => {
    console.log(res.statusCode);
    res.pipe(process.stdout);
});
*/

// this is mandatory to invoke the request
//req.end();


// If you're sure that you only need to make get request you can use this method instead.
http.get(options, (res) => {
  console.log(res.statusCode);
  res.pipe(process.stdout);
});

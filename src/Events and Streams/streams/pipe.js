var request = require('request');
var fs = require('fs');
var zlib = require('zlib');

// Instead of listening for the events we're gonna simply call pipe()
// And we're going to pipe it to a Writeable stream
//request('https://www.pluralsight.com').pipe(process.stdout);

// Captures the stream and Writes it to a file we specify
//request('https://www.pluralsight.com').pipe(fs.createWriteStream('src/pluralsight.html'));

// use Zlib to compress the data
request('https://www.pluralsight.com').pipe(zlib.createGzip()).pipe(fs.createWriteStream('src/streams/pluralsight.html.gz'));


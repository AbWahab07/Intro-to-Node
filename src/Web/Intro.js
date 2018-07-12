// http is a built-in module of Node JS
var http = require('http');

// request function of http module

// options can be a
      // URL string or
      // A complex object specifying options about the request being made
      // e.g values of host, auth, port, method, path, headers etc.

// request function returns instance of http.ClientRequest(a WriteableStream)
      // this stream can be written/piped to for POST requests

// request function takes a callback parameter
      // callback is passed an instance of http.ClientResponse(a ReadableStream)
      // This stream can be read from or can be piped to a WriteableStream

// Also note that this callback is an example where
      // Node doesn't follow it's own conventions since
      // the first parameter to callback is not an error indicator

// If you don't provide a callback you can provide the instance of http.ClientResponse
      // as a response event on the request object

// For Get requests http.get() is available as a simplified interface

var req = http.request(options, (res) => {
  // process callback
});

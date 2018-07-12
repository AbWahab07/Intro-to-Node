// Run this file via Terminal using command:  node src/readablestream.js
// Request Module is a third party module installed from NPM registry
var request = require('request');

// This will return a stream
var s = request('https://www.pluralsight.com');

// As we know Streams inherit from EventEmitter, we've access to on method and we can subscibe to events emiited by the Stream

// This event is emitted when new data has been received
s.on('data', function(chunk){
    console.log(">>>> Data: >>>>> " + chunk);
});

// This event is emitted when there is no more data to be read
s.on('end', function(){
    console.log(">>>> Done >>>>>");
});



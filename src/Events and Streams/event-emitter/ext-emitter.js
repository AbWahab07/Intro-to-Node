//Demo: Inheriting from EventEmitter
const Resource = require('./resource');
const r = new Resource(7);

r.on('start', function(){
  console.log("I've started!");
});

r.on('data', function(d){
   console.log("I received data -> " + d);
});

r.on('end', function(c){
   console.log("I'm done with "+ c + " data events");
});

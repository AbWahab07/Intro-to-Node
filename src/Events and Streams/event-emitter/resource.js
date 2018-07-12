// Demo of Object that extends EventEmitter to emit event themselves
// This file contains the logic used in ext-emitter.js file
var util = require('util');
var eventEmitter = require('events').EventEmitter;

function Resource(m){
  // we need to use "this" as our resource is inherting eventEmitter object
  const self = this;
  process.nextTick(function(){
      var count = 0;
      self.emit('start');
      var t = setInterval(function(){
          self.emit('data', ++count);
          if(count === m) {
              self.emit('end', count);
              clearInterval(t);
          }
      }, 10);
  });
};

// Our resource extends EventEmitter object which gives our resouces the access to on/emit methods
util.inherits(Resource, eventEmitter);

module.exports = Resource;

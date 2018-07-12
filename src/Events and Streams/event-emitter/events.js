//Demo: Returning an EventEmitter from a function
const eventEmitter = require('events').EventEmitter;

const getResource = function(c){
    const e = new eventEmitter();
    process.nextTick(function(){
        var count = 0;
        e.emit('start');
        var t = setInterval(function(){
            e.emit('data', ++count);
            if(count === c) {
                e.emit('end', count);
                clearInterval(t);
            }
        }, 10);
    });
    return (e);
};

const r = getResource(5);

// Event Subscription
r.on('start', function(){
   console.log("I've started!");
});

r.on('data', function(d){
    console.log("I received data -> " + d);
});

r.on('end', function(c){
    console.log("I'm done with "+ c + " data events");
});

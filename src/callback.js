//console.log('Hello');
const maxTime = 1000;

//If input is Odd, display error
//If input is even double it
//call takes random time less than 1 sec

const evenDoubler = function(v, callback){
    const waitTime = Math.floor(Math.random()*(maxTime+1));
    if(v%2) {
        setTimeout(function(){
            callback(new Error("Odd Input"));
        }, waitTime);
    }
    else {
        setTimeout(function(){
          callback(null, v*2, waitTime);
        }, waitTime);
    }
};

const handleResults = function(err, results, time){
    if (err) {
        console.log("Error: " + err.message);
    } else {
        console.log("The results are: " + results + " (" + time + ")");
    }
};

/*
evenDoubler(2, handleResults);
evenDoubler(3, handleResults);
evenDoubler(12, handleResults);
*/
var count = 0;
for (let i = 0; i < 9; i++) {
  console.log("Calling evenDoubler for value " + i);
  //evenDoubler(i, handleResults);

  evenDoubler(i, function(err, results, time){
      if (err) {
          console.log("Error: " + err.message);
      } else {
          console.log("The results are: " + results + " (" + time + ")");
      }
      if(count++ === 8) {
        console.log("Done");
      }
    });
}
console.log("------");

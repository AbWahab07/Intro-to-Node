// Run this file via Terminal using command:  node src/writeablestream.js

console.log("Stdout is writeable? " + process.stdout.writable);

process.stdout.write("Hello ");
process.stdout.write("World");

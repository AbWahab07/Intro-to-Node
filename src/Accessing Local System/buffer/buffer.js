var a = new Buffer('Hello');
console.log(a.toString()); // Hello

console.log(a.toString('base64'));

console.log(new Buffer('World').toString('base64'));

console.log(a.toString('utf-8',1,3)); // el



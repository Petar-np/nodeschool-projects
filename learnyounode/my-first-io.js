var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var text = buf.toString();
var array = text.split('\n');
var sum = 0;

for(var i = 0; i < array.length; i++) {
 sum += 1;
}

console.log(sum-1);


//Krace resenje Nodeschoola

var fs = require('fs')  
var contents = fs.readFileSync(process.argv[2])  
var lines = contents.toString().split('\n').length - 1  

console.log(lines)

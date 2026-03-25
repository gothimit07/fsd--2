// write a node js script to take 5 digit element sepreted by white space in txtx file using sort method print sorted array of this 5 elements on js server
var fs=require('fs')
fs.writeFileSync("data.txt","5 3 1 6 9")
data=fs.readFileSync("data.txt","utf-8")
d=data.split(" ").sort()
console.log(d)
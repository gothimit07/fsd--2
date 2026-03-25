// Defining an array of object with properties name and age. Write this object in a file named student.txt then read the file and display the object on console.

var fs=require('fs')
var obj=[{'name':'sagar'},{'age':80}]
obj3=JSON.stringify(obj)
fs.writeFileSync("student.txt",obj3)
d=fs.readFileSync("student.txt","utf-8")
console.log(d)
data=JSON.parse(d)
console.log(data[0].name)
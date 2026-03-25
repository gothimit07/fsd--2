var fs= require('fs');
fs.writeFileSync("Hello.txt","How R U?")
fs.appendFileSync("Hello.txt","\n I am fg")
data=fs.readFileSync("Hello.txt","utf-8")
console.log(data)

fs.copyFileSync("Hello.txt","hi.txt")
fs.unlinkSync("Hello.txt")
console.log("Program ended")
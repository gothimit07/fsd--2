// Write a node.js script using Event handling to perform following tasks in sequence:

// Create a folder named Test.

// Create file in it named abc.txt and enter data into it.

// Append data to that file abc.txt and print message “Data Appended Successfully”.

// Read the content of the file abc.txt and print the concsole (Ref*- content on http web server).

// Copy data from abc.txt to pqr.txt.

// Delete old file and Lastly print the message “All operations performed successfully” on console.

// Perform using Synchronous file system module.

fs=require('fs')
var e=require('events')
var ee=new e()

ee.on('mkdir',()=>{
    fs.mkdirSync("Test")
    ee.emit("write")
})
ee.on("write",()=>{
    fs.writeFileSync("Test/abc.txt","Enter data into it")
    ee.emit("append")
})
ee.on("append",()=>{
    fs.appendFileSync("Test/abc.txt","\nthat data")
    console.log("Data Appended Successfully")
    ee.emit("read")
})
ee.on("read",()=>{
    data=fs.readFileSync("Test/abc.txt","utf-8")
    console.log(data)
    ee.emit("copy")
})
ee.on("copy",()=>{
    fs.copyFileSync("Test/abc.txt","Test/pqr.txt")
    ee.emit("delete")
})
ee.on("delete",()=>{
    fs.unlinkSync("Test/abc.txt")
    console.log("All operations performed successfully")
})
ee.emit("mkdir")
// Write a node js script to write the text “This is data” to new.txt file. After that append the text “that is data” to same ne .txt file. After that read the file and print file concept on console. After finishing read operation, print the line “Thanks for using my program” on console. All read/write operations are asynchronous. (using Event)

fs=require('fs')
var e=require('events')
var ee=new e()

ee.on("write",()=>{
    fs.writeFile("abc.txt","This is data",(err)=>{
        if(err) throw err
        ee.emit("append")
    })
})
ee.on("append",()=>{
    fs.appendFile("abc.txt","\nthat is data",(err)=>{
        if(err) throw err
        ee.emit("read")
    })
})
ee.on("read",()=>{
    fs.readFile("abc.txt","utf-8",(err,data)=>{
        if(err) throw err
        console.log(data)
        ee.emit("print")
    })
})
ee.on("print",()=>{
    console.log("Thank you for using program")
})
ee.emit("write")
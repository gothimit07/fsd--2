var fs=require('fs')
fs.writeFile("async.txt","I am Async",(err)=>{
    if(err) throw err
    console.log("Write Done")
    fs.appendFile("async.txt","Data Append",(err)=>{
        if(err) throw err
        console.log("Append Data")
        fs.readFile("async.txt","utf-8",(err,data)=>{
            if(err) throw err
            console.log(data)
        })

    })
})
console.log("Program end")
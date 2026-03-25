var fs=require('fs')
fs.writeFile("abc.txt","this is data",(err)=>{
    if(err) throw err
    console.log("Write Done")
    fs.appendFile("abc.txt","\n that is data",(err)=>{
        if(err) throw err
        console.log("append Done")
        fs.copyFile("abc.txt","pqr.txt",(err)=>{
            if(err) throw err
            console.log("copy done")
            fs.readFile("pqr.txt","utf-8",(err)=>{
                if(err) throw err
                console.log("read done")
                fs.unlink("abc.txt",(err)=>{
                    if(err) throw err
                    console.log("unlink done")
                })
            })
        })
    })
})
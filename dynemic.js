var fs=require('fs')
var http=require('http')
http.createServer((req,res)=>{
    let file="."+(req.url==="/"?"/7.html":req.url)
    fs.readFile(file,(err,data)=>{
        if (err){
            res.end('File Not Found')
        }
        else{
            res.writeHead(200,{'Contend-Type':'text/html'})
            res.write(data)
            res.end()
        }
    })
}).listen(6055)
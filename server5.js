var fs=require('fs')
var http=require('http')
Server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end('<h1>Hello</h1>')
    }
    else if(req.url==='/a.html'){
        const img=fs.readFileSync('a.html','utf-8')
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(img)
    }
})
Server.listen(8181,()=>{console.log("Server Started")})
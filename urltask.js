var fs=require('fs')
var http=require('http')
Server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end('<h1>Welcome to Log in page</h1>')
    }
    else if(req.url==='/img.png'){
        const img=fs.readFileSync('img.png')
        res.writeHead(200,{'Content-Type':'image/png'})
        res.end(img)
    }
})
Server.listen(8180,()=>{console.log("Server Started")})
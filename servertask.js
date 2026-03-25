http=require('http')
http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write("<h1><a href='/'>Home</a></h1><h1><a href='/about'>About</a></h1>")
        res.end()
    }
    else if(req.url=='/about'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end("<h1 style='color:red'>This is About Page</h1>")
    }
    else{
        res.end('not found')
    }
}).listen(5678,()=>{console.log("Server Started")})
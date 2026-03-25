var http=require('http')
Server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>Hello Home Page</h1>')
        res.end()
    }
    else if(req.url=='/about'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('This is about Page')
        res.end()
    }
    else{
        res.writeHead(404,{'Content-Type':'text/html'})
        res.write('<h4>Page Not Fount</h4>')
        res.end()
    }
})
Server.listen(5006,()=>{console.log("Server Started")})
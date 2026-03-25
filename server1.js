var http=require('http')
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'})
    const data={subject:'fsd-2',Topic:'Nodejs'}
    res.end(JSON.stringify(data))
}).listen(5000,()=>{console.log("Server start")})
// http=require('http')
// url=require('url')
// fs=require('fs')
// var add="https://www.google.com/exam.txt?c1=Hello&c2=FSD2 T1 Test&c3=Welcome to LJU#AllTheBest"
// q=url.parse(add,true)
// var data0=q.query.c1
// var data1=q.query.c3
// var data2=q.query.c2
// var data3=q.hash
// const fname="."+q.pathname
// const data=data0+'!\n'+data1+" "+data2+'\n'+data3
// fs.writeFileSync(fname,data)
// http.createServer((req,res)=>{
//     if(req.url=='/'){
//         ans=fs.readFileSync(fname,'utf-8')
//         res.writeHead(200,{'Content-Type':'text/html'})
//         res.write("<h1 style='color:red'><pre>"+ans+"</pre></h1>")
//         res.end()
//     }
//     else{
//         res.end('not found')
//     }
// }).listen(3000)ans=fs.readFileSync(fname,'utf-8')
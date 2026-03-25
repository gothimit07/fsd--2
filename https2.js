var fs=require('fs')
var url=require('url')
add="https://www.google.com/exam.txt?c1=Hello&c2=FSD2 T1 Test&c3=Welcome to LJU#AllTheBest"
q=url.parse(add,true)
console.log(q)
var data=q.query.c1
fs.writeFileSync('abcscs.txt',data+'!\n',(err)=>{
    if(err) throw err
})
var data1=q.query.c3
fs.appendFileSync('abcscs.txt',data1+" ",(err)=>{
    if(err) throw err
})
var data2=q.query.c2
fs.appendFileSync('abcscs.txt',data2,(err)=>{
    if(err) throw err
})
var data3=q.hash
fs.appendFileSync('abcscs.txt','\n'+data3,(err)=>{
    if(err) throw err
})
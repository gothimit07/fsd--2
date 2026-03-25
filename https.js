var fs=require('fs')
var url=require('url')
ad1="http://localhost:8080/test?T1=20&T2=24&T3=23"
q=url.parse(ad1)
var data=q.query
console.log(data)
fs.writeFile('abbc.txt',data,(err)=>{
    if(err) throw err
})
q0=url.parse(ad1,true)
data=JSON.stringify(q0.query)
fs.writeFile('poti.txt',data,(err)=>{
    if(err) throw err
})
var u=require('url')
addr="http://localhost:8080/defult.html?year=2026&Month=march#warupdate"
var q=u.parse(addr,true)
// console.log(q)

// var u1 = new URL(addr)
process.noDeprecation=true;
// console.log(u1.parse)
// console.log(u1.href)
// console.log(u1.query)
// console.log(u1.hostname)
console.log("---------------------------------------------------------------------------")
console.log("---------------------------------------------------------------------------")
console.log("---------------------------------------------------------------------------")
console.log("---------------------------------------------------------------------------")
console.log(q.query.year)
if((q.query.year%4==0)&&(q.query.year%100==0)){
    console.log("leape year")
}
else{
    console.log("not leape year")
}
console.log("---------------------------------------------------------------------------")
addr1="http://localhost:8080/test?T1=20&T2=24&T3=23"
var q1 = u.parse(addr1,true)
t1=parseInt(q1.query.T1)
t2=parseInt(q1.query.T2)
t3=parseInt(q1.query.T3)
console.log((t1+t2+t3)/3)
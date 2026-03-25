var e=require('events')
var ee=new e()
ee.on('Saycode',(code,text)=>{
    console.log(`Your status code is ${code} wiht msy ${text}`)
})
ee.on('Sayage',()=>{
    console.log("My age is 23")
})
ee.emit('Sayage')
ee.emit('Saycode',200,'ok')
console.log("Check My Position")
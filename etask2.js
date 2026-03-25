// Write a NodeJs script to create two listeners for a common event. Call their respective callbacks. Print no. of events associated with an emitter. Remove one of the listener and  print no of remaining listeners. 

var e=require('events')
var ee=new e()
var l1=()=>{console.log('I am Listener 1')}
var l2=()=>{console.log('I am Listener 2')}
ee.addListener("conn",l1)
ee.on("conn",l2)
ee.emit("conn")
var c=ee.listenerCount("conn")
console.log(c)
ee.emit("conn")
ee.removeListener("conn",l1)
var d=ee.listenerCount("conn")
console.log(d)
ee.emit("conn")
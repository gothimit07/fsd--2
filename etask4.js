// Write node js script to handle events as asked below.

// 1) Check the radius is negative or not. If negative then display message “Radius” must be positive” else calculate the perimeter of circle. 

// 2) Check side is negative or not. If negative then display message “Side must be positive” else calculate the perimeter of square. 

var e=require('events')
var ee=new e()

ee.on('radius',(r)=>{
    if(r<0){
        console.log("If negative then display message “Radius” must be positive”")
    }
    else{
        pec=2*3.14*r
        console.log("perimeter of circle=",pec)
    }
})
ee.on('side',(s)=>{
    if(s<0){
        console.log("If negative then display message “Side” must be positive”")
    }
    else{
        pes=4*s
        console.log("perimeter of square=",pes)
    }
})
ee.emit('radius',5)
ee.emit('side',-9)
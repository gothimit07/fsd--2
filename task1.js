// Create JSON object which contains array of objects. Calculate perimeter of square and perimeter of circle by using side value and diameter value respectively. And object as well as calculated  data in shape.txt	
fs=require('fs')
const shape=[{name:"circle",diameter:8},{name:"square",side:10}]
obj=JSON.stringify(shape)
fs.writeFileSync("shape.txt",obj)
data=fs.readFileSync("shape.txt","utf-8")
d=JSON.parse(data)
sp=d[1].side*4
cp=d[0].diameter*3.14
fs.appendFileSync("shape.txt","Peri of circle is:"+cp+"Peri of square is:"+sp)

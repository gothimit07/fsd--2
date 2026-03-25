path=require('path')
a=path.dirname("d:/LJ/abc.txt")
console.log(a)
b=path.basename("d:/LJ/abc.txt")
console.log(b)
c=path.extname("d:/LJ/abc.txt")
console.log(c)
d=path.parse("d:/LJ/abc.txt")
console.log(d)
if(d.ext==".html"){
    console.log("File is HTML")
}
else{
    console.log("File Is Not HTML")
}
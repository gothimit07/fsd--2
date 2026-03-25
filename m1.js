// var obj={"name":"abc","age":28}
//         console.log(obj)
//         console.log(obj.name)
//         console.log(obj["age"])
//         console.log("I am "+obj.name+" & my age is "+obj["age"])
//         var a={"name":"Test","age":25,"address":{"city":"Ahmedabad","zip":"380008"},"subject":["FSD2","FCSP2"],"ispass":false,"year":null}
//         console.log(a.age)
//         console.log(a.address)
//         console.log(a["address"]['zip'])
//         console.log(a.subject[0])
//         var objj={"book":[{"id":1,"name":"php","edition":2,"author":["fsd2","abc","pqr"]},{"id":2,"name":"java","edition":3,"author":"Herbet schidi"}]}
//         console.log(objj.book[1]["name"])
//         console.log(objj.book[0]["author"][2])

        // const obj1=require("./m1.json")
        // console.log(obj1.name)
        // var data={"name":"abc","age":28}
        // console.log(data)
        // console.log(data.name)
        // var obj=JSON.parse(data)
        // var obj=JSON.stringify(data)
        // console.log(obj)
        // console.log(obj.name)

        // data.name="pqr"
        // console.log(data.name)

        // let key="name"
        // data["key"]="mna"
        // console.log(data)

        const fun = function(){
                console.log('Hello')
        }
        setTimeout(fun,5000)

        setInterval(()=>{console.log("How R U?")},6000)
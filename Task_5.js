var arr=[['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]

function fun(arr){
    obj={}
    for (i=0;i<arr.length;i++){
    var newarr=arr[i]
    obj[newarr[0]]=newarr[1]
}
return obj

}
console.log(fun(arr))
// for (i=0;i<arr.length;i++){
//     for (j=0;j<1;j++){
//         obj[arr[i][j]]=arr[i][j+1]
//     }
    
// }
//
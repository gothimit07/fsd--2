// Using Node.js, write a Node.js script that uses the Node.js Path Module and the Node.js File System Module with asynchronous methods to perform the following operations for the path FSD-mern/path.txt

// Extract the directory name from the given file path using the Path module.

// Create the extracted directory inside an existing folder using the asynchronous methods of the fs module.

// Extract the file name from the given path using the Path module.

// Create a file with the extracted file name inside the newly created directory and write some data into it.

// Copy the contents of this file to another file using an asynchronous file operation.

// Delete the original file after successfully copying the content.

// Note: All file operations must be performed using asynchronous methods of the fs module.

fs=require('fs')
path=require('path')
let a="FSD-mern/path.txt"
b=path.dirname(a)
c=path.basename(a)
fs.mkdir(b,(err)=>{
    if(err) throw err
    console.log("Folder Created")
    fs.writeFile(a,'hello',(err)=>{
        if(err) throw err
        console.log("File Created")
        fs.copyFile(a,b+"/pqrr.txt",(err)=>{
            if(err) throw err
            console.log("copy")
            fs.unlink(a,(err)=>{
                if(err) throw err
                console.log("unlink")
            })
        })
    })
})

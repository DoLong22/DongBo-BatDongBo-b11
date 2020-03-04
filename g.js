//viết promise đọc file 
const fs = require('fs');

function read(fileName){
    return new Promise((resolve, reject)=>{
        fs.readFile(fileName, 'utf8',(err,data)=>{
            if(err) return reject(err);
            resolve(data)
        })
    })    
}

read('./x.txt')
.then(text => console.log(text))
.catch(err => console.log(err.message))


//bat dong bo -> su dung các giá trị nằm ngoài chương trình
// đồng bộ -> sử dụng các giá trị nằm trong chương trình

const fs = require('fs');
fs.readFile('./x.txt', 'utf8',(err,str)=>{
    console.log (str);
}) 

function read(filename){
    let x;
    fs.readFile(filename,'utf8',(err,str)=>{
        if(err) x=null;
        x= str;
    })
}

console.log(read('./x.txt'));
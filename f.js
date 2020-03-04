//promise
const request = require('request');

function cong(a, b,cb) {
    if(typeof a !== 'number' || typeof b !== 'number'){
        return cb(new Error("Type Error"))
    }
    const url = `http://localhost:3000/tinh/CONG/${a}/${b}`;
    request(url, (err, res, body) => {
        cb(err, body);
    })
}
cong(3,4,(err,kq)=>{
    if(err) return console.log(err.message);
    console.log(kq);
})
function congPromise(a,b){
    return new Promise((resolve, reject) => {
        if(typeof a !== 'number' || typeof b !== 'number'){
            return reject(new Error('Type error'));
        }
        const url = `http://localhost:3000/tinh/CONG/${a}/${b}`;
        request(url,(err,res,body)=>{
            resolve(body);
        });
    });
}
congPromise(5,6)
.then(result => console.log(result))
.catch(err => console.log(err.message));
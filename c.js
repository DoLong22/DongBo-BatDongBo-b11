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

function nhan(a, b,cb) {
    if(typeof a !== 'number' || typeof b !== 'number'){
        return cb(new Error("Type Error"))
    }
    const url = `http://localhost:3000/tinh/NHAN/${a}/${b}`;
    request(url, (err, res, body) => {
        cb(err, body);
    })
}

function chia(a, b,cb) {
    if(typeof a !== 'number' || typeof b !== 'number' || b === 0){
        return cb(new Error("Type Error"))
    }
    const url = `http://localhost:3000/tinh/CHIA/${a}/${b}`;
    request(url, (err, res, body) => {
        cb(err, body);
    })
}
chia(4, 5, (err,kq)=>{
    if(err) return console.log(err.message);
    console.log('Ket qua la: ' + kq);
})


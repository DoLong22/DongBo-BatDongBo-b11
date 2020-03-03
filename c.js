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
 

// chia(4, 5, (err,kq)=>{
//     if(err) return console.log(err.message);
//      console.log('Ket qua la: ' + typeof kq);
//  })

//(a+b)*h/2
function tinhDienTich(a,b,h,cb){
    cong(a, b, (err0,tong)=>{
        if(err0) return cb(err)
        nhan(+tong, h, (err1,tich)=>{          
            if(err1) return cb(err1)
            chia(+tich, 2, (err2, kq2)=>{
                if(err2) return cb(err2)
                return cb(null,kq2);
            })
        })
    })
}

tinhDienTich(4,5,6,(err,kq) =>{
    if(err) return console.log(err.message);
    console.log("Dien tich hinh thang bang " + kq);
});

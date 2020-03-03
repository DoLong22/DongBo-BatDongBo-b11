const request = require('request');


function getIp(cb) {
    request('http://ip.jsontest.com/', (err, res, body) => {
        cb(err, body);
    });
}

getIp((err,ip)=>{
    if(err) return console.log(err.message);
    console.log(ip);
});



var Promise = require('bluebird');

var p = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve('1 sec');
    }, 1000);
});

var p2 = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve('2 sec');
    }, 700);
});

var p3 = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve('3 sec');
    }, 500);
});

Promise.map([p,'sudhir',p3],function(prom){
   return new Promise(function(resolve,reject){
       reject(prom);
   });
}).then(function(result){
console.log('result');
console.log(result);
}).catch(function(err){
    console.log('err');
    console.log(err);
});



const fs=require ('fs')
// catch方法
function a(){
    return new Promise(function(resolve,reject){
        fs.readFile('./request/1.md',(err,data)=>{
            // if(err) reject(err)
            // resolve(data)
            reject('我是1的错误信息')
        })
    })
}
function b(){
    return new Promise(function(resolve,reject){
        fs.readFile('./request/2.md',(err,data)=>{
            // if(err) reject(err)
            // resolve(data)
            reject('我是2的错误信息')
        })
    })
}
function c(){
    return new Promise(function(resolve,reject){
        fs.readFile('./request/3.md',(err,data)=>{
            // if(err) reject(err)
            // resolve(data)
            reject('我是3的错误信息')
        })
    })
}

// function a(){
//     return new Promise(function(resolve,reject){
//         fs.readFile('./request/1.md',(err,data)=>{
//             // if(err) reject(err)
//             // resolve(data)
//             reject('我是1的错误信息')
//         })
//     })
// }
// function b(){
//     return new Promise(function(resolve,reject){
//         fs.readFile('./request/2.md',(err,data)=>{
//             // if(err) reject(err)
//             // resolve(data)
//             reject('我是2的错误信息')
//         })
//     })
// }
// function c(){
//     return new Promise(function(resolve,reject){
//         fs.readFile('./request/3.md',(err,data)=>{
//             // if(err) reject(err)
//             // resolve(data)
//             reject('我是3的错误信息')
//         })
//     })
// }

// function a(){
//     return new Promise(function(resolve,reject){
//         fs.readFile('./request/1.md',(err,data)=>{
//             // if(err) reject(err)
//             // resolve(data)
//             reject('我是1的错误信息')
//         })
//     })
// }
// function b(){
//     return new Promise(function(resolve,reject){
//         fs.readFile('./request/2.md',(err,data)=>{
//             // if(err) reject(err)
//             // resolve(data)
//             reject('我是2的错误信息')
//         })
//     })
// }
// function c(){
//     return new Promise(function(resolve,reject){
//         fs.readFile('./request/3.md',(err,data)=>{
//             // if(err) reject(err)
//             // resolve(data)
//             reject('我是3的错误信息')
//         })
//     })
// }

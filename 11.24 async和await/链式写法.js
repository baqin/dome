const fs = require('fs')
function fn() {
    return new Promise((resolve, reject) => {
        fs.readFile('./request/1.md', (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}
function b() {
    return new Promise(function (resolve, reject) {
        fs.readFile('./request/2.md', (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}
function c() {
    return new Promise(function (resolve, reject) {
        fs.readFile('./request/3.md', (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}
fn().then(res => {
    // console.log(res);
    return res.toString()
}).then(data => {
    // console.log(data);
    b().then(res => {
        // console.log(data+res.toString());
        return data + res.toString()
    }).then(data1 => {
        // console.log(data1);
        c().then(res => {
            console.log(data1.toString() + res.toString());
        })
    })

})

// fn().then(res => {
//     // console.log(res);
//     return res.toString()
// }).then(data => {
//     // console.log(data);
//     b().then(res => {
//         // console.log(data+res.toString());
//         return data + res.toString()
//     }).then(data1 => {
//         // console.log(data1);
//         c().then(res => {
//             console.log(data1.toString() + res.toString());
//         })
//     })

// })

// fn().then(res => {
//     // console.log(res);
//     return res.toString()
// }).then(data => {
//     // console.log(data);
//     b().then(res => {
//         // console.log(data+res.toString());
//         return data + res.toString()
//     }).then(data1 => {
//         // console.log(data1);
//         c().then(res => {
//             console.log(data1.toString() + res.toString());
//         })
//     })

// })
// fn().then(res => {
//     // console.log(res);
//     return res.toString()
// }).then(data => {
//     let arr1=b().then(res=>res)
//     console.log(arr1);
//     // let arr = b().then(res => res.toString())
//     // return data + arr.toString()
//     // console.log(arr);
// }).then(data1=>{
//     // let arr1=c().then(res=>res.toString())
//     // console.log(data1.toString()+arr1);
// })

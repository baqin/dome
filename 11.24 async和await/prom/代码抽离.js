const fs=require ('fs')
function fn(url) {
    return new Promise((resolve, reject) => {
        fs.readFile(url, (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

fn('./request/1.md').then(res => {
    console.log(res);
    return res.toString()
}).then(data => {
    console.log(data);
    fn('./request/2.md').then(res => {
        console.log(res.toString())
    })
}).then(() => {
    fn('./request/3.md').then(res => {
        console.log(res.toString())
    })
})

// function fn(url) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(url, (err, data) => {
//             if (err) reject(err)
//             resolve(data)
//         })
//     })
// }

// fn('./request/1.md').then(res => {
//     console.log(res);
//     return res.toString()
// }).then(data => {
//     console.log(data);
//     fn('./request/2.md').then(res => {
//         console.log(res.toString())
//     })
// }).then(() => {
//     fn('./request/3.md').then(res => {
//         console.log(res.toString())
//     })
// })

// function fn(url) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(url, (err, data) => {
//             if (err) reject(err)
//             resolve(data)
//         })
//     })
// }

// fn('./request/1.md').then(res => {
//     console.log(res);
//     return res.toString()
// }).then(data => {
//     console.log(data);
//     fn('./request/2.md').then(res => {
//         console.log(res.toString())
//     })
// }).then(() => {
//     fn('./request/3.md').then(res => {
//         console.log(res.toString())
//     })
// })

// function fn(url) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(url, (err, data) => {
//             if (err) reject(err)
//             resolve(data)
//         })
//     })
// }

// fn('./request/1.md').then(res => {
//     console.log(res);
//     return res.toString()
// }).then(data => {
//     console.log(data);
//     fn('./request/2.md').then(res => {
//         console.log(res.toString())
//     })
// }).then(() => {
//     fn('./request/3.md').then(res => {
//         console.log(res.toString())
//     })
// })
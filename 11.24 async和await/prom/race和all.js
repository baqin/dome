const p1 =new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(1111)
    },300)
})

const p2 =new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(222)
    },500)
})

const p3 =new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(333)
    },700)
})
// race方法
Promise.race([p1,p2,p3]).then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})

// Promise.race([p1,p2,p3]).then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// })

// Promise.race([p1,p2,p3]).then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// })
// all方法
Promise.all([p1,p2,p3]).then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})

// Promise.all([p1,p2,p3]).then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// })

// Promise.all([p1,p2,p3]).then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// })
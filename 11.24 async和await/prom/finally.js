

function p() {
    return new Promise((resolve, rejects)).then(res => {
        console.log("我是第三组巴钦")
    })
}
p().then(res => {
    console.log(res,'1111');
}).catch(err => {
    console.log(err,'222');
}).finally(() => {
    console.log("我是第三组巴钦");
})

// function p() {
//     return new Promise((resolve, rejects)).then(res => {
//         console.log("我是第三组巴钦")
//     })
// }
// p().then(res => {
//     console.log(res,'1111');
// }).catch(err => {
//     console.log(err,'222');
// }).finally(() => {
//     console.log("我是第三组巴钦");
// })

// function p() {
//     return new Promise((resolve, rejects)).then(res => {
//         console.log("我是第三组巴钦")
//     })
// }
// p().then(res => {
//     console.log(res,'1111');
// }).catch(err => {
//     console.log(err,'222');
// }).finally(() => {
//     console.log("我是第三组巴钦");
// })
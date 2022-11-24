const fs=require('fs')
function fn(){
    return new Promise((resolve, reject) => {
        fs.readFile('./request/1.md',(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}
fn().then(res=>{
    console.log(res.toString());
})
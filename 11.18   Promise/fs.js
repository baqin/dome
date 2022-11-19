const p=new Promise((resolve, reject) => {
    fs.readFile('./为学.md',(err,data)=>{
        if(err) reject(err)
       resolve(data)
    })

 p.then(res=>{
   console.log(res);
  },(err)=>{
  console.log(err);
  })
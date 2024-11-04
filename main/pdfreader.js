const fs = require('fs')
fs.readFile('./Ezenagu.pdf','utf8',(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data.toString())
    }
})
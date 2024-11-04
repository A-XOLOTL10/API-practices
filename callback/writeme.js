const fs = require('fs')
fs.writeFile('sample.txt','This is my sample ',(err)=>{
    if(err){
        console.log(err);
    }
})
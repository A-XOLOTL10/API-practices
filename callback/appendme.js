const fs = require('fs')
fs.appendFile('sample.txt','\nThis is my sample update',(err)=>{
    if(err){
        console.log(err);
    }
})
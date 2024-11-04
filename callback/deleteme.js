const fs = require('fs')
fs.unlink('sample.txt',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("deleted successfully");
    }
})
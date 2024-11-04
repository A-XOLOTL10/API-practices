const fs = require('fs').promises
fs.appendFile('./sample.txt','\nMy updated sample')
.then(()=>{
    console.log("success")
})
.catch((err)=>{
    console.log(err)
})
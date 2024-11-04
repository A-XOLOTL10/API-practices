const fs = require('fs').promises
fs.writeFile('./sample.txt','My write sample','utf8')
.then(()=>{
    console.log("success")
})
.catch((err)=>{
    console.log(err)
})
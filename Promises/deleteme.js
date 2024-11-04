const fs = require('fs').promises
fs.unlink('./sample.txt',)
.then(()=>{
    console.log("file successfully deleted")
})
.catch((err)=>{
    console.log(err)
})
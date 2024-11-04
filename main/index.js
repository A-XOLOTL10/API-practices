const fs = require("fs").promises

fs.writeFile("./sample.txt","Hey people of ")
.then(()=>{
    console.log("success");
})
.catch((e)=>{
    console.log(e)
})

fs.appendFile("./sample.txt","The Curve")
.then(()=>{
    console.log("success");
})
.catch((e)=>{
    console.log(e)
})
//writing to a file
 
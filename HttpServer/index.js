const http = require("http")
const port = 3000
const fs =require('fs')
const server = http.createServer((req, res)=>{
    res.writeHead(200,{'content-type':'html'})
     fs.readFile('../demo.html',(err,data)=>{
        res.write(data)
        res.end()
 })
    // res.write(data)       
})




server.listen(port,()=>{
    console.log(data)
    console.log("successful")})
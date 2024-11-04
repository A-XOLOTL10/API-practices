const http = require('http')
const port = 5000
const {displayAll,displayBreakfast,displayLunch,displayDinner}= require('./Controller/controller')

const server = http.createServer((req,res)=>{
            if(req.url == "/menu"){
                displayAll(req,res)
            }
            // else if(req.url == "/breakfast " || "/Breakfast" ){
            //   displayBreakfast(req,res)
            // }
            else if(req.url == "/breakfast/1 " || "/Breakfast/1" ){
                displayBreakfast(req,res,101)
              }

            else{
                console.log( "error")
            }

    
})
server.listen(port,()=>{
    console.log("Running successfully")
})
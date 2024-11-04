//import te express library
const express = require('express');
const fs = require('fs')
const port =  3030;//creating port

//create app for te express object
const app = express();

app.get('/',(req,res)=>{
    res.status(200).json({
        message:"Welcome to my service"
    })
})


const readDatabase = (req, res) =>{
    const infoDatabase = fs.readFileSync('./user.json')
    return JSON.parse(infoDatabase)
}
const writeDatabase = (data) => {
    fs.writeFileSync("./user.json", JSON.stringify(data,null,2))
}

// get users
app.get('/users',(req,res)=>{
    const users = readDatabase()
    
    if(users.users.length == 0){
        res.status(404).json({
            message:"Empty"
        })            
        } 
        else{
            res.status(200).json({
                // message: "Successful",
                // data: users,
                total: users.users.length
            })
        }
})

//get one user
app.get('/users/:id',(req, res )=>{
   
    const data = readDatabase();
    const userid = parseInt(req.params.id);
    const user = data.users.find((a)=>( a.id === userid));//find 
  
    if(user ){
        res.status(200).json({
            status:"success",
            data: user
        })
    }else{
        res.status(404).json({
            message:"error"
        })
    }
 })

//create new user
app.post('/users/create',(req,res)=>{
    const data = req.body
})
app.listen(port,()=>{
      
    console.log(`app is listening on port ${port} `)

})
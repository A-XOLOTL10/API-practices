const express = require('express');
const port = 4000;
const app = express()

app.use(express.json())

const database= [
    {    
        id:1,
        staffName: "James",
        staffAddress:"24 road carat" ,
        staffSalary:10000,
        staffPosition: "jnr dev",
        staffGender: "male"
    },
    {    
        id:2,
        staffName: "Danielle",
        staffAddress: "junction carat" ,
        staffSalary: 30000,
        staffPosition: "backend dev",
        staffGender: "female"
    }
]
app.get('/',(req, res)=>{
    res.send("Welcome to my App")
})

//all staffs
app.get('/staffs',(req, res)=>{
 if(database.length === 0){
    res.status(404).json({
        message:"database not found"
    })
 }
 else{
    res.status(200).json({
        message:"Total staffs",
        data: database
    })
 }
})

//get 1 staff
app.get('/staff/:id',(req, res)=>{
    const id = parseInt(req.params.id)
    const staffData = database.find((a)=> a.id === id)
    if(!staffData){
       res.status(404).json({
           message:"staff not found"
       })
    }
    else{
       res.status(200).json({
           message:"current staff",
           data: staffData
       })
    }
   })



   //add new staff
   app.post('/staff',(req,res)=>{
   const newStaff = req.body
   newStaff.id= database.length + 1    
   database.push(newStaff)
   res.status(200).json({
    message:"successful addition",
    data: database
   })
   })

   //delete  Staff
   app.delete('/staff/:id',(req, res)=>{
    const staffId = parseInt(req.params.id);
    const deleteId = database.find((a)=>a.id === staffId)
    const details = database.findIndex((a)=>a.id = staffId)
    console.log(details)
    if(!deleteId){
        res.status(404).json({message:"staff not found"})
    }
    else{
        deletedStaff = database[details]   
        deletedStaff = database.splice(details,1)
        res.status(200).json({
            message: "successful deletion",
            currentUpdate: database
        })    
    }
}) 


//update post
app.put("/staff/:id",(req, res)=>{
    const staffId = parseInt(req.params.id)
    const updatedId = req.body
    const details = database.findIndex((i)=>(i.id === staffId))
    if (details !==-1){
        database[details] = {...database[details], ...updatedId}
             res.status(200).json({
                data:database[details]
            })
    } else {
        res.send("wrong id sent")
    }
})
   
   app.listen(port,()=>{
    console.log(`listenin'g on port ${port}`)
}) 
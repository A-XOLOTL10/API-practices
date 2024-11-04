const express = require('express');
const port = 4000;
const app = express()

app.use(express.json())

const database= [
    {    
        id:1,
       name:"micarl",
       number:09078972998,
       cateory:"work"
    },
    {    
        id:2,
        name:"love",
        number:09078892298,
        cateory:"home"
    }
]
app.get('/',(req, res)=>{
    res.send("Welcome to my Contact List")
})

//all contacts
app.get('/contacts',(req, res)=>{
 if(database.length === 0){
    res.status(404).json({
        message:"database not found"
    })
 }
 else{
    res.status(200).json({
        message:"all Contacts",
        data: database
    })
 }
})

// contact requested
app.get('/contact/:id',(req, res)=>{
    const id = parseInt(req.params.id)
    const contactData = database.find((a)=> a.id === id)
    if(!contactData){
       res.status(404).json({
           message:"contact not found"
       })
    }
    else{
       res.status(200).json({
           message:"Contact requested",
           data: contactData
       })
    }
   })

   //add new contact

   app.post('/contact',(req,res)=>{
   const newContact = req.body
   newContact.id= database.length + 1    
   database.push(newContact)
   res.status(200).json({
    message:"successful addition",
    data: database
   })
   })

   //delete contact
   app.delete('/contact/:id',(req, res)=>{
    const contactId = parseInt(req.params.id);
    const deleteId = database.find((a)=>a.id === contactId)
    const details = database.findIndex((a)=>a.id = contactId)
    console.log(details)
    if(!deleteId){
        res.status(404).json({message:"contact not found"})
    }
    else{
        deletedContact = database[details]   
        deletedContact = database.splice(details,1)
        res.status(200).json({
            message: "successful deletion",
            currentUpdate: database
        })    
    }
}) 


//update contact list
app.put("/contact/:id",(req, res)=>{
    const contactId = parseInt(req.params.id)
    const updatedId = req.body
    const details = database.findIndex((i)=>(i.id === contactId))
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
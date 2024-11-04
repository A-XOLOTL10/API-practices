const express = require('express');
const port = 4000;
const app = express()

app.use(express.json())

const database= [
    {    
        id:1,
        productName:"ps5",
        price:"500k",
        color:"Black",
        img:"ps5.jpg",
        quantity:2
    },
    {    
        id:2,
        productName:"light saber",
        price:"20M",
        color:"Red",
        img:"saber.jpg",
        quantity:1
    }
]
app.get('/',(req, res)=>{
    res.send("Welcome to my App")
})

//all cart
app.get('/items',(req, res)=>{
 if(database.length === 0){
    res.status(404).json({
        message:"database not found"
    })
 }
 else{
    res.status(200).json({
        message:"Total Items",
        data: database
    })
 }
})


   //add to cart
   app.post('/item',(req,res)=>{
   const newItem = req.body
   newItem.id= database.length + 1    
   database.push(newItem)
   res.status(200).json({
    message:"successful addition",
    data: database
   })
   })

   //delete  1 post
   app.delete('/item/:id',(req, res)=>{
    const itemId = parseInt(req.params.id);
    const deleteId = database.find((a)=>a.id === itemId)
    const details = database.findIndex((a)=>a.id = itemId)
    console.log(details)
    if(!deleteId){
        res.status(404).json({message:"item not found"})
    }
    else{
        deletedItem = database[details]   
        deletedItem = database.splice(details,1)
        res.status(200).json({
            message: "successful deletion",
            currentUpdate: database
        })    
    }
}) 


//update post
app.put("/item/:id",(req, res)=>{
    const itemId = parseInt(req.params.id)
    const updatedId = req.body
    const details = database.findIndex((i)=>(i.id === itemId))
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
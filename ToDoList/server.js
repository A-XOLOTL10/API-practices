const express = require('express');
const port = 4000;
const app = express()

app.use(express.json())
const database = [
    {
        id: 1,
        taskName: "buy Bread",
        Location: "end of street",
        date:"2023, 06, 01",
        // time : {
        //     Hours: "01:00:00",
        //     Minutes: "00:10:00",
        //     Seconds: "00:00:30"
        // }
        reminder:5,
        status:"true"
    },
    {
        id: 2,
        taskName: "buy fish",
        Location: "end of street",
        date:"2023, 06, 01",
        reminder:4,
        status:"true"
    }
]
//my app
app.get('/',(req, res)=>{
    res.send("Welcome to my To Do List App")
})
function wapp(){
    const data =  database.find(reminder);

    let maxkey = null;
    let maxvalue = -Infinity
    for(const [key,value] of Object.entries(data)){
        if(maxvalue<value){
            maxkey = key;
            maxvalue = value;
        }

    }
    console.log(maxkey, maxvalue)
    // res.status(200).json({
    //     message:`${maxkey} is the oldest with age ${maxvalue}  `
    // })
}
wapp()

//all list
app.get('/lists',(req, res)=>{
 const data = database
 if(data.length === 0){
    res.status(404).json({
        message:"database not found"
    })
 }
 else{
    res.status(200).json({
        message:"Total to do list",
        data: data
    })
 }
})

// current date list 
app.get('/list/:id',(req, res)=>{
    const data = database
    const id = parseInt(req.params.id)
    const foundDate = data.find((a)=> a.id === id)
    if(!foundDate){
       res.status(404).json({
           message:"list not found"
       })
    }
    else{
       res.status(200).json({
           message:"current list",
           data: foundDate
       })
    }
   })

   //add new list

   app.post('/list',(req,res)=>{
       const data = database
    const newList = req.body
   newList.id= data.length + 1    
   data.push(newList)
   res.status(200).json({
    message:"successful addition",
    data: data
   })
   })

   //delete  1 list
   app.delete('/list/:id',(req, res)=>{
    const listId = parseInt(req.params.id);
    const deleteId = database.find((a)=>a.id === listId)
    const details = database.findIndex((a)=>a.id = listId)
    console.log(details)
    if(!deleteId){
        res.status(404).json({message:"list not found"})
    }
    else{
        deleteList = database[details]   
         deletedList = database.splice(details,1)
        res.status(200).json({
            message: "successful deletion",
            currentUpdate: database
        })    
    }
}) 


//update to do list
app.put("/list/:id",(req, res)=>{
    const listId = parseInt(req.params.id)
    const updatedId = req.body
    const details = database.findIndex((i)=>(i.id === listId))
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
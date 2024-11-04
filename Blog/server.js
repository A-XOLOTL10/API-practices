const express = require('express');
const port = 4000;
const app = express()

app.use(express.json())

const database= [
    {    
        id:1,
        post:"My First post"
    },
    {    
        id:2,
        post:"My First post"
    }
]
app.get('/',(req, res)=>{
    res.send("Welcome to my To Do List App")
})

//all posts
app.get('/posts',(req, res)=>{
 if(database.length === 0){
    res.status(404).json({
        message:"database not found"
    })
 }
 else{
    res.status(200).json({
        message:"Total Posts",
        data: database
    })
 }
})

// current post
app.get('/post/:id',(req, res)=>{
    const id = parseInt(req.params.id)
    const postData = database.find((a)=> a.id === id)
    if(!postData){
       res.status(404).json({
           message:"post not found"
       })
    }
    else{
       res.status(200).json({
           message:"current post",
           data: postData
       })
    }
   })

   //add new post

   app.post('/post',(req,res)=>{
   const newPost = req.body
   newPost.id= database.length + 1    
   database.push(newPost)
   res.status(200).json({
    message:"successful addition",
    data: database
   })
   })

   //delete  1 post
   app.delete('/post/:id',(req, res)=>{
    const postId = parseInt(req.params.id);
    const deleteId = database.find((a)=>a.id === postId)
    const details = database.findIndex((a)=>a.id = postId)
    console.log(details)
    if(!deleteId){
        res.status(404).json({message:"post not found"})
    }
    else{
        deletedPost = database[details]   
        deletedPost = database.splice(details,1)
        res.status(200).json({
            message: "successful deletion",
            currentUpdate: database
        })    
    }
}) 


//update post
app.put("/post/:id",(req, res)=>{
    const postId = parseInt(req.params.id)
    const updatedId = req.body
    const details = database.findIndex((i)=>(i.id === postId))
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
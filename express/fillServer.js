const express = require('express');
const port =  3050;//creating port


//create app for te express object
const app = express();
app.use(express.json())
const databaseTotal = {
    "staffs" : [
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
          staffName: "Sam",
          staffAddress: "Amuwo" ,
          staffSalary: 20000,
          staffPosition: "snr dev",
          staffGender: "female"
  
         }
      ]
  }

const writeDatabase = (data)=>{
    databaseTotal.staffs.push(data)
    // console.log(JSON.stringify(databaseTotal))
}


app.get('/',(req, res)=>{
    res.send("wElcome to te filing recruitment service")
})

// //add new staff
app.post('/staffs',(req,res)=>{
   
        const database = databaseTotal
        const newStaff = req.body
        newStaff.id= databaseTotal.staffs.length+1    
        database.staffs.push(newStaff)
         res.status(201).json({
            newstaff:newStaff
        })    
      })

    //all users
    app.get('/staffs',(req,res)=>{
          if(databaseTotal.staffs.length === 0){
            res.status(404).json({
               message:"database not found "
            })
               }
               else{
                res.status(200).json({
                    message: "success",
                    staffs:databaseTotal
                })
               }
    })
    app.get('/staff/:id',(req, res )=>{
   
        const staffid = parseInt(req.params.id);
        const emp = databaseTotal.staffs.find((a)=> a.id === staffid);//find 
        console.log(emp)
        res.status(200).json({
               data: emp
            })
        })

     //   delete new staff
app.delete('/staffs/:id',(req, res)=>{
    const staffId = parseInt(req.params.id);
    const main = databaseTotal.staffs.find((a)=>a.id = staffId)
    const details = databaseTotal.staffs.findIndex((a)=>a.id = staffId)
    if(!main){
        res.status(404).json({message:"User not found"})
    }
    else{
        deleteStaff = databaseTotal.staffs[details]   
         deleted = databaseTotal.staffs.splice(details,1)
        res.status(200).json({
            message: "successful",
            currentUpdate: databaseTotal
        })    
    }
}) 

//update staff
app.put("/staffs/:id",(req, res)=>{
    const staffId = parseInt(req.params.id)
    const updatedstaff = req.body
    const details = databaseTotal.staffs.findIndex((i)=>(i.id === staffId))
    if (details !==-1){
        databaseTotal.staffs[details] = {...databaseTotal.staffs[details], ...updatedstaff}
             res.status(200).json({
                data:databaseTotal.staffs[details]
            })
    } else {
        res.send("wrong id sent")
    }
})

// //get  1 staff





 app.listen(port, () =>{
    console.log(`app is listening to server on ${port}`)
})
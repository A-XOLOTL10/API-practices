const express = require('express');
const app = express();
const port = 3030;
const mongoose = require('mongoose');
const dataUrl = "mongodb://127.0.0.1/studentDB";

app.use(express.json())

//connect to database
mongoose.connect(dataUrl).then(()=>{
    console.log("connected")
}).catch((error)=>{
    console.log(error.message) 
}) 

//schema /structure of database
const studentSchema = mongoose.Schema({
    studentName:{ type:String,required:[true,"put in your info"]  },
    studentAge:{ type:Number,required:[true,"put in your info"]  },
    studentCourse:{ type:String,required:[true,"put in your info"]  },
    studentAddress:{ type:String,required:[true,"put in your info"]  }
 
})

const studentModel = mongoose.model("StudentInfo",studentSchema)

app.post('/student',async(req,res)=>{
    try {
        const student = await studentModel.create(req.body)
        res.status(200).json({
            message:"data record created succesfully",
            student:student
        })
        
    } catch (error) {
        res.status(404).json({
            message:error.message
        })
        
    }
})

app.get('/student/:id', async(req,res)=>{
    try {
        const studentid = req.params.id
        const info = await studentModel.findById(studentid)
        
        res.status(200).json({
            student: info
                })
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
        console.log(error.message)
    }
})

app.get("/oldest", async(req,res)=>{
    const data = await studentModel.find();

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
})

app.listen(port,()=>{
    console.log(`listening on ${port}`);
})

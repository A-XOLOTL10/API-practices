const express = require('express')
const app = express();
const port = 4050;
const mongoose = require('mongoose');
const dataUrl = "mongodb+srv://divineezenagu10:Ezenagu123@cluster0.liaq5hc.mongodb.net/"

app.use(express.json())

//connect to database
mongoose.connect(dataUrl).then(()=>{
    console.log("connected")
}).catch((error)=>{
    console.log(error.message) 
}) 



const electionSchema = mongoose.Schema({
    parties:{type: Array,required:[true,"put in your info"]},
    state:{type: String,required:[true,"put in your info"], unique: true},
    totalRegVoters:{type:Number,required:[true,"put in your info"]},
    totalVotes:{
      lp:  {type: Number,required:[true,"put in your info"]},
      apc:  {type: Number,required:[true,"put in your info"]},
       pdp: {type: Number,required:[true,"put in your info"]},
       apga: {type: Number,required:[true,"put in your info"]}
    },
   
    isRigged:{
         type:Boolean,
        default: function(){
           let sum = 0
           let RegVoters = this.totalRegVoters
            for(const [key, value] of Object.entries(this.totalVotes)){
               sum += value;
            }
             return RegVoters < sum;
        }
    },
    winner:{
        type:String,
        default: function (){
       let maxvalue = -Infinity;
       let maxkey = null;
        for(const [key, value] of Object.entries(this.totalVotes)){
            
            if(value  > maxvalue ){
                maxvalue = value  
                maxkey = key                   
             }
        }
        const isRig = this.isRigged 
        if( isRig == false){
            return ` ${maxkey} is the winner with ${maxvalue} votes `
        }
        else{
        return "election was rigged"
           }
        }
    }
        
})

const electionModel =  mongoose.model("electionInfo",electionSchema) ;

//CRUD
app.post('/election',async (req,res)=>{
 try {
    const createElection = await electionModel.create(req.body)
    res.status(200).json({
        message:"created successfully",
        data:createElection
    })
 } catch (error) {
    res.status(404).json({
        message:error.message
    })
    
 }
})



app.get('/rigged/:state',async(req,res)=>{
    try {
      const rigged =  await electionModel.find({state:req.params.state});
   
      if(rigged[0].isRigged === true ){
          res.status(200).json({
              message: `election rigged`,
              status:rigged[0].isRigged
          })
      }else{
        res.status(200).json({
            message: `not rigged`,
            status:rigged[0].isRigged
      })
    }
    } catch (error) {
      res.status(404).json({
          message:error.message
      })
      
    }
  })


app.get('/election/:state',async(req,res)=>{
  try {
    const result =  await electionModel.find({state: req.params.state});
 
    console.log(typeof(result))
          res.status(200).json({
            message:"success",
            data:[winnerst]
          
        })
    }
  catch (error) {
    res.status(404).json({
        message:error.message
    })
    
  }
})


app.get('/totalR', async(req,res)=>{
  try {
    
    const allRigged = await electionModel.find({isRigged:true});
    if(allRigged.length === 0){
        return res.status(404).json({
            message:"No rigged elections found"
        })
    }else{

    res.status(200).json({
        message:"all rigged elections",
        data: allRigged
        })
    }
  } catch (error) {
    res.status(404).json({
        message:error.message
    })
  }
})


app.get('/notRigged', async(req,res)=>{
    try {
      
      const allRigged = await electionModel.find({ isRigged:false }).exec()
      if(allRigged.length === 0){
          return res.status(404).json({
              message:"No rigged elections found"
          })
      }else{
  
      res.status(200).json({
          message:"all rigged elections",
          data: allRigged
          })
      }
    } catch (error) {
      res.status(404).json({
          message:error.message
      })
    }
  })
  
//delete all rigged
app.delete('/rigged',async(req,res)=>{
  
  try {
    const deleteElection = await electionModel.deleteMany({isRigged:true})
    res.status(200).json({
        message:"successfully cancelled",
        data: deleteElection
    })
  } catch (error) {
    res.status(404).json({
        message:error.message
    })
  }
})

//delete all 

app.listen(port,()=>{
    console.log(`app listening on ${port}`)
 })
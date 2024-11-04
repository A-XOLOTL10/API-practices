const mongoose = require('mongoose');
const app = require('./app')
const  dotenv = require ('dotenv')
dotenv.config({path:'./Config/config.env'});

const db = `${process.env.DATABASE}`


mongoose.connect(db)
.then(()=>{
    console.log(`connected to database`)
}).catch((error)=>{
    console.log(error.message)
})


app.listen(process.env.PORT,()=>{
    console.log(`app listenin on port ${process.env.PORT}`)
})


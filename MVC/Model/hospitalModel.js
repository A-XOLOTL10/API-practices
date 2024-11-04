//create database Schema
const mongoose = require('mongoose');
const hospitalSchema =  mongoose.Schema({
    Name: {type:String, required:[true,'pls enter name']},
    Address: {type:String, required:[true,'pls enter name']},
    MedicalHistory: {type:String, required:[true,'pls enter name']},
    bloodgroup: {type:String, required:[true,'pls enter name']},
    Gender: {type:String, required:[true,'pls enter name']}
},
    {timestamps:true}
)


const hospitalModel = mongoose.model('hospital',hospitalSchema) 

module.exports = hospitalModel
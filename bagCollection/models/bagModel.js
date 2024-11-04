const mongoose = require('mongoose');

const database =  mongoose.Schema({
    brandName:{type : String},
    color :{type : String},
    price:{type : Number},

}) 

const bagModel = mongoose.model('Bag', database)
module.exports = bagModel;
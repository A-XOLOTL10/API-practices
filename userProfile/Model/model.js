const mongoose = require('mongoose');

const userDatabase = new  mongoose.Schema({
 Name:{
    type: String,
    required: [true, "please fill name"],
 },

  class:{
    type: String,
    required: [true, "please enter class"],
   
    },
  
  Age:{
    type: Number,
    required: [true, "please fill branch first"],
    },  

  picture:{
   type: Array,
   requires:[true, "please fill picture"]
  }, 

});

const userModel = mongoose.model('profiler',userDatabase);
module.exports =    userModel

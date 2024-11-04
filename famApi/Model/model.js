const mongoose = require('mongoose');

const famDatabase = new  mongoose.Schema({
 fatherName:{
    type: String,
    required: [true, "please fill fatherName"],
 },

 motherName:{
    type: String,
    required: [true, "please enter  motherName"],
   
    },
  
 childrenName:{
    type:[String],
    required: [true, "please fill  children names"],
    validate:{
      validator:function (val) {
        return Array.isArray(val) && val.every((name) => typeof name === 'string');
      }
    }
    },

  childrenPic:{
   type:Object,
   requires:[true, "please fill picture"]
  }, 

});

const famModel = mongoose.model('profiler',famDatabase);
module.exports = famModel

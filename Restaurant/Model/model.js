const mongoose = require('mongoose');

const restDatabase = new  mongoose.Schema({
  branch:{
    type: String,
    required: [true, "please fill branch first"],
    unique: true},

  citizenMeals:{
        type:Object
    },
  
  refuelMax:{
    type:Object
  }, 

  refuel:{
    type:Object
  }, 

  chickWizz:{
    type:Object
  }, 

  bigBoyMeal:{
    type:Object
  } 
});

const restaurantModel = mongoose.model('restaurant',restDatabase);
module.exports =    restaurantModel

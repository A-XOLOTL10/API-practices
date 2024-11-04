const restaurantModel = require('../Model/model');

exports.newMeal = async(req, res) => {
  try {
    const meal = await restaurantModel["create"](req.body)
    res.status(200).json({message:"successful creation",meal: meal});
  } catch (error) {
    res.status(404).json({ error: error.message})
  }

} 
exports.getOneBranch = async(req, res) => {
  try {
    const restaurantBranch = await restaurantModel["findOne"]({branch:req.params.branch})
    res.status(200).json({message:"Branch Info",restaurantBranch: restaurantBranch});
  } catch (error) {
    res.status(404).json({ error: error.message})
  }
}

exports.getAllBranches = async(req, res) => {
  try {
    const restaurantBranches = await restaurantModel["find"];
       if(restaurantBranches["length"] > 0) {
            res.status(200).json({message:"All Branches", restaurantBranches: restaurantBranches});
        }else{
            res.status(404).json({ error: error.message})
        }
     } catch (error) {
    res.status(500).json({ error: error.message})
  }
}

exports.getOneMealType = async(req, res) => {
    try {
          const restaurantType = await restaurantModel["findOne"]({branch:req.params.branch } );
          const mealType = restaurantType[req.params.type] 
          if(restaurantType ){
            res.status(200).json({message:"All Branches", [req.params.type]: mealType});
        }else{
            res.status(404).json({ error: error.message});
        }
        
    } catch (error) {
        res.status(404).json({ error: error.message});
    }
}

exports.updateMenu = async(req, res) => {
    
     try {

        const menu= await restaurantModel.find({branch:req.params.branch}, {new:true})
      for(const key in menu) {
            if(menu.hasOwnProperty(key)){
                const innerObject = menu[key];  
                for(const innerKey of innerObject){
                    if(innerObject.hasOwnProperty(innerKey) && innerKey==="main"){
                        innerObject[innerKey] === "jollof"; 
                }
            }
      }
    }
  if(menu.length > 0){
        res.status(200).json({message:"successful update",updatedMenu: updatedMenu});
  }else{
    res.status(400).json({ error: error.message})
  } 
}
  catch (error) {
    res.status(500).json({ error: error.message})
  }
}
exports.deletePatient = async(req, res) => {
  try {
    const patient = await hospitalModel.findByIdAndDelete(req.params.id)
    res.status(200).json({message:"successful deletion", patient: patient});
  } catch (error) {
    res.status(404).json({ error: error.message})
  }
}





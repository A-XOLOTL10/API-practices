const famModel = require('../Model/model');
const fs = require('fs')

exports.newFam =  async(req, res) => {
  try {
        const {fatherName , motherName, childrenName } = req.body;
        const filer = req.files;
        console.log(filer)
        childrenPic = {};

         filer.forEach((file, index )=> {
          const childName = childrenName[index];
          childrenPic[childName] = file.filename;
          
         });
         const family = await famModel.create({
          fatherName: fatherName,
          motherName: motherName,
          childrenName: childrenName,
          childrenPic: childrenPic
         })


  
    res.status(200).json({message:"successful creation",family : family });
  } catch (error) {
    res.status(404).json({ error: error.message})
  }


 exports.getOneFam = async(req, res) => {
  try {
    const family = await famModel["findOne"](req.params.id)
    res.status(200).json({message:"family Info",family: family});
  } catch (error) {
    res.status(404).json({ error: error.message})
  }
}

exports.getAllFam = async(req, res) => {
  try {
    const family = await famModel["find"];
       if(family["length"] > 0) {
            res.status(200).json({message:"All Branches", family: family});
        }else{
            res.status(404).json({ error: error.message})
        }
     } catch (error) {
    res.status(500).json({ error: error.message})
  }
}

exports.updateFam = async(req, res) => {
    
     try {

          const familyId = req.params.id; 
          const { fatherName, motherName, childrenName } = req.body;
      
          const family = await famModel.findById(familyId);
      
          // Update father's name if it has changed
          if (fatherName  !== family.fatherName) {
            await famModel.findByIdAndUpdate(familyId, { fatherName:fatherName }, { new: true });
          }
      
          // Update mother's name
          if (motherName !== family.motherName) {
            await famModel.findByIdAndUpdate(familyId, { motherName:motherName }, { new: true });
          }
      
          // Update children's names
          if (childrenName && childrenName.length > 0) {
            await famModel.findByIdAndUpdate(familyId, { childrenName }, { new: true });
          }
      
          // Update children's pictures
          const files = req.files;
          if (files && Object.keys(files).length > 0) {
            const promises = Object.keys(files).map((childName) => {
              const newPictureFile = files[childName][0].filename;
              return famModel.findByIdAndUpdate(
                familyId,
                { $set: { [`childrenPic.${childName}`]: newPictureFile } },
                { new: true }
              );
            });
            await Promise.all(promises);
          }
      
          res.status(200).json({ message: 'Family information updated successfully' });
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while updating the family information' });
        }
      }
  
exports.deleteFam = async(req, res) => {
  try {
        await famModel.findByIdAndDelete(req.params.id);
    
        res.status(200).json({ message: 'Family deleted successfully' });
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the family' });
      }
    }

// module.exports = { deleteFam, getOneFam, getAllFam, updateFam, newFam}



};
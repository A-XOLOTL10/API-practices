const {Router} = require('express');
const path = require('path');
const familyController= require('../Controller/famController');
const router = Router();
const multer = require('multer');
const uploadedImage = multer(
    {
        dest: 'famimages/',
        limits:{fileSize:10000000},
        fileFilter: (req,files,cb)=>{   
            const fileExt = path.extname(files.originalname);
            if(fileExt ===".png" || fileExt ===".jpg" || fileExt ===".jpeg" ){
                cb(null,true)
            }else{new Error("wrong format"),false}
        }
    });


router.post("/fam", uploadedImage.array("childrenPic",3) ,  familyController.newFam);
// router.get("/fam/:id",  familyController.getOneFam);
// router.get("/fams",  familyController.getAllFam); 
// router.put("/fam/:id",uploadedImage.array("childrenPic",3),  familyController.updateFam);
// router.delete("/fam/:id", familyController.deleteFam);

module.exports = router;

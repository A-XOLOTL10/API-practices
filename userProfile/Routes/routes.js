const {Router} = require('express');
const path = require('path');
const {newUser} = require('../Controller/profileController');
const router = Router();
const multer = require('multer');
const uploadedImage = multer(
    {
        dest: 'images/',
        limits:{fileSize:10000000},
        fileFilter: (req,files,cb)=>{   
            const fileExt = path.extname(files.originalname);
            if(fileExt ===".png" || fileExt ===".jpg" || fileExt ===".jpeg" ){
                cb(null,true)
            }else{new Error("wrong format"),false}
        }
    }).array("picture",5);


router.post("/user", uploadedImage, newUser);
// router.get("/restaurant/:branch", getOneBranch);
// router.get("/restaurants", getAllBranches);
// router.get("/restaurant/:branch/:type", getOneMealType);
// router.put("/restaurant/:branch", updateMenu);
// router.delete("/patient/:id",deletePatient);

module.exports = router;

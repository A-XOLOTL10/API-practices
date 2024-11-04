const multer = require('multer');

multer({
    destination: (req,file,cb)=>{
        cb(null, destination)
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})
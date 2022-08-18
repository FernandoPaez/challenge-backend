const multer = require('multer');
const path= require('path');
//const{v4:uuidv4}= require('uuid');



storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, './uploads');
    },
    filename: (req, res, cb) => {
        cb(null, Date.now()+'-'+file.originalname);
    }
});
upload=multer({storage});
module.exports= upload;

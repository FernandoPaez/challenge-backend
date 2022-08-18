import multer from 'multer';
//import path from 'path';
//const{v4:uuidv4}= require('uuid');



const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'src/archivos');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});


const upload = multer({ storage });

export default upload;

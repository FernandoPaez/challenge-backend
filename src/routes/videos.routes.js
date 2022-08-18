const {Router} = require ('express');
import {upload} from '../libs/multer.js';

const router=Router();

router.post('/upload',upload.single('file'),(req,res)=>{
    console.log(req.file);
    res.send('el archivo se subio correctamente');

})

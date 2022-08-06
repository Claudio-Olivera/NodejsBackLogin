const multer = require("multer")
const storage = multer.diskStorage({
    destination:function(req, file, cb){
        const pathStorage = `${__dirname}/../storage`;
        cb(null, pathStorage)
    },
    filename:function(req, file, cb){
        //todo: mi-cv.pdf mi-foto.png mi.video.mp4
        const ext = file.originalname.split(".").pop();//todo ["name","png"]
        const filename = `file-${Date.now()}.${ext}`; //todo formato unix, devuelve file-123456456.mp3 todo esto se hace para que los nombres de los archivos subidos sean distintos y eso permita que no se sobrescriban en la db
        cb(null, filename)
    }
});

const uploadMiddleware= multer({storage});

module.exports = uploadMiddleware;
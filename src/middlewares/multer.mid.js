import multer from "multer";
import __dirname from "../../utils.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, __dirname + "/public/assets"),
  filename: (req, file, cb) => cb(null, file.originalname),
});

const uploader = multer({ storage });
<<<<<<< HEAD
export default uploader;
=======
export default uploader;
>>>>>>> a6eb8328261b4472d1713d1a88ab78540eeff323

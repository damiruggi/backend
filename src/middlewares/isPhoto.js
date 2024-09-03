function isPhoto(req, res, next) {
  console.log(req.file);
  try {
    if (req.file) {
      req.body.photo = "/public/assets/" + req.file.filename;
    }
    return next();
  } catch (error) {
    return next(error);
  }
}

<<<<<<< HEAD
export default isPhoto;
=======
export default isPhoto;
>>>>>>> a6eb8328261b4472d1713d1a88ab78540eeff323

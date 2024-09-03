function isTitle(req, res, next) {
  try {
    const { title } = req.body;
    if (!title) {
      const err = new Error("Insert title!");
      err.statusCode = 400;
      throw err;
    }
    return next();
  } catch (error) {
    return next(error);
  }
}

<<<<<<< HEAD
export default isTitle;
=======
export default isTitle;
>>>>>>> a6eb8328261b4472d1713d1a88ab78540eeff323

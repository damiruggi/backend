async function isValidAdmin(req, res, next) {
  try {
    const { role } = req.session;
    if (role === 1) {
      return next();
    }
    const error = new Error("Forbidden");
    error.statusCode = 403;
    throw error;
  } catch (error) {
    return next(error);
  }
}

<<<<<<< HEAD
export default isValidAdmin;
=======
export default isValidAdmin;
>>>>>>> a6eb8328261b4472d1713d1a88ab78540eeff323

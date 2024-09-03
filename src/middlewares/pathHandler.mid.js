function pathHandler(req, res, next) {
  return res.json({
    statusCode: 404,
    message: `${req.method} ${req.url} not found path`,
  });
}
<<<<<<< HEAD
export default pathHandler;
=======
export default pathHandler;
>>>>>>> a6eb8328261b4472d1713d1a88ab78540eeff323

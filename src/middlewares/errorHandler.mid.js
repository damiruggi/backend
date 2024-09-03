<<<<<<< HEAD
import winston from "../utils/winston.util.js";

function errorHandler(error, req, res, next) {
  const message = `${req.method} ${
    req.url
  } ${error.statusCode} - ${new Date().toLocaleTimeString()} - ${error.message}`;
  winston.ERROR(message);
=======
function errorHandler(error, req, res, next) {
  console.log(error);
>>>>>>> a6eb8328261b4472d1713d1a88ab78540eeff323
  return res.json({
    statusCode: error.statusCode || 500,
    message: error.message || "CODER API ERROR",
  });
}

export default errorHandler;
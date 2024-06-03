import passport from "passport";

const passportCb = (strategy) => (req, res, next) => {
  passport.authenticate(strategy, { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(401).json({
        statusCode: 401,
        message: info ? info.message : "Authentication failed",
      });
    }
    req.user = user;
    next();
  })(req, res, next);
};

export default passportCb;

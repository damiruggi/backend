class SessionsController {
  async register(req, res, next) {
    try {
      return res.message201("Registered!");
    } catch (error) {
      return next(error);
    }
  }

  async login(req, res, next) {
    try {
      return res
        .cookie("token", req.user.token, { signedCookie: true })
        .message200("Logged in!");
    } catch (error) {
      return next(error);
    }
  }

  async profile(req, res, next) {
    try {
      if (req.user && req.user.online) {
        return res.status(200).json(req.user);
      }
      const error = new Error("Bad auth");
      error.statusCode = 401;
      throw error;
    } catch (error) {
      return next(error);
    }
  }

  signout(req, res, next) {
    try {
      if (req.user) {
        res.clearCookie("token");
        return res.status(200).json({ message: "Signed out!" });
      }
      const error = new Error("Invalid credentials from signout");
      error.statusCode = 401;
      throw error;
    } catch (error) {
      return next(error);
    }
  }

  google(req, res, next) {
    try {
      return res.redirect('/')
    } catch (error) {
      return next(error);
    }
  }
}

const sessionsController = new SessionsController();
const { register, login, signout, google, profile } = sessionsController;
export { register, login, signout, google, profile };

import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import usersManager from '../data/mongo/UsersManager.mongo.js';
import { createHash, verifyHash } from '../utils/hash.util.js';
import { createToken } from '../utils/token.util.js';
import environment from '../utils/env.util.js';

passport.use(
  'register',
  new LocalStrategy(
    { passReqToCallback: true, usernameField: 'email' },
    async (req, email, password, done) => {
      try {
        if (!email || !password) {
          const error = new Error('Please enter email and password!');
          error.statusCode = 400;
          return done(null, false, error);
        }
        const existingUser = await usersManager.readByEmail(email);
        if (existingUser) {
          const error = new Error('User already exists!');
          error.statusCode = 401;
          return done(null, false, error);
        }
        const hashPassword = createHash(password);
        req.body.password = hashPassword;
        const newUser = await usersManager.create(req.body);
        return done(null, newUser);
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  'login',
  new LocalStrategy(
    { passReqToCallback: true, usernameField: 'email' },
    async (req, email, password, done) => {
      try {
        const user = await usersManager.readByEmail(email);
        if (!user) {
          const error = new Error('Invalid credentials!');
          error.statusCode = 401;
          return done(null, false, error);
        }
        const isPasswordValid = verifyHash(password, user.password);
        if (isPasswordValid) {
          const token = createToken({
            email: user.email,
            role: user.role,
            photo: user.photo,
            _id: user._id,
            online: true,
          });
          const userWithToken = { ...user._doc, token };
          return done(null, userWithToken);
        }
        const error = new Error('Invalid credentials!');
        error.statusCode = 401;
        return done(null, false, error);
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  'google',
  new GoogleStrategy(
    {
      clientID: environment.GOOGLE_CLIENT_ID,
      clientSecret: environment.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:8080/api/sessions/google/callback',
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, done) => {
      try {
        const { id, picture } = profile;
        let user = await usersManager.readByEmail(id);
        if (!user) {
          user = await usersManager.create({
            email: id,
            password: createHash(id),
            photo: picture,
          });
        }
        const token = createToken({
          email: user.email,
          role: user.role,
          photo: user.photo,
          _id: user._id,
          online: true,
        });
        const userWithToken = { ...user._doc, token };
        return done(null, userWithToken);
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  "jwt",
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req) => req?.cookies["token"],
      ]),
      secretOrKey: environment.SECRET_JWT,
    },
    (data, done) => {
      try {
        if (data) {
          return done(null, data);
        } else {
          const error = new Error("Forbidden from jwt!");
          error.statusCode = 403;
          return done(error);
        }
      } catch (error) {
        return done(error);
      }
    }
  )
);

export default passport;

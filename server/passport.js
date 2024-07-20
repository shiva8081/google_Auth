import passport from "passport";
import bcrypt from "bcrypt";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as LocalStrategy } from "passport-local";
import dotenv from "dotenv";
import User from "./model/user.js";
dotenv.config(); // Load environment variables
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3600/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      console.log("Google profile:", profile); // Debugging log
      return done(null, profile);
    }
  )
);

passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    async (email, password, done) => {
      try {
        // Find the user by username
        const user = await User.findOne({ email });

        if (!user) {
          return done(null, false, { message: "Incorrect username." });
        }

        // Compare passwords directly
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
          return done(null, false, { message: "Incorrect password." });
        }

        console.log(user);
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser(async (user, done) => {
  try {
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

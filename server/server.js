import express from "express";
import passport from "passport";
import cors from "cors";
import session from "express-session";
import authRoute from "./routes/auth.js";
import authSignup from "./routes/signup.js"
import "./passport.js";
import dotenv from "dotenv";
import connecttomongodb from "./db/connecttomongodb.js";
import User from "./model/user.js";
dotenv.config();
const PORT = process.env.PORT || 3900;

const app = express();
app.use(
  session({
    secret: "shivasecret",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 }, // 24 hours
  })
);
app.use(express.json())
app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: "PUT,GET,POST,DELETE",
  })
);

app.use("/auth", authRoute);
app.use("/api/auth",authSignup)

app.listen(PORT, async () => {
  await connecttomongodb();
  // await User.create({fullname:"shiva yadav",username:"shiva80855",phone:"7253808173",password:"qwertyuiop"})
  console.log(`server running on port ${PORT}`);
});

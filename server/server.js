import express from "express";
import passport from "passport";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session";
import authRoute from "./routes/auth.js";
import authSignup from "./routes/signup.js"
import authReset from "./routes/reset.js"
import authPost from "./routes/post.js"
import "./passport.js";
import dotenv from "dotenv";
import connecttomongodb from "./db/connecttomongodb.js";

dotenv.config();
const PORT = process.env.PORT || 3900;
const SECRET=process.env.SECRET;

const app = express();
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 }, // 24 hours
  })
);
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
app.use("/api/auth",authSignup);
app.use("/api/reset",authReset);
app.use("/api/post",authPost);

app.listen(PORT, async () => {
  await connecttomongodb();

  console.log(`server running on port ${PORT}`);
});

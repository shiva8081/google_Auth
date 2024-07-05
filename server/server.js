import express from "express";
import passport from "passport";
import cors from "cors";
import session from "express-session";
import authRoute from "./routes/auth.js"
import "./passport.js"
import dotenv from "dotenv"
dotenv.config()
const PORT =process.env.PORT || 3900

const app = express();
app.use(
  session({
    secret: "shivasecret",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 } // 24 hours
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
    methods:"PUT,GET,POST,DELETE",
   
}))

app.use("/auth", authRoute)

app.get("/test",(req,res)=>{
res.send("hello")
console.log("hello")
})

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

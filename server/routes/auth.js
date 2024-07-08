import express from "express";
import passport from "passport";
const route = express.Router();
import dotenv from "dotenv";

dotenv.config(); // Load environment variables
const CLIENT_URL = process.env.CLIENT_URL;

route.get("/login/success", (req, res) => {
  if (req.user) {
    
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
    });
  }
  else{
    res.json("no user login first")
  }
});




route.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});
route.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    console.log("working logout");
   req.session.destroy((err)=>{
    if(err){
      return next(err)
    }
   })
   res.clearCookie("connect.sid")
    res.redirect(CLIENT_URL); // Redirect after logout
  });
});

route.get("/google", passport.authenticate("google", { scope: ["profile"] }));

route.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

export default route;

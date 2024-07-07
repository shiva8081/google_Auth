import express from "express";
import User from "../model/user.js";
import passport from "passport";
import bcrypt from "bcrypt"

const route = express.Router();

route.post("/signup", async (req, res) => {
  try {
    const { fullname, username, password, confirmpassword, phone,email } = req.body;

    //passord
    if (password !== confirmpassword) {
      return res.status(400).json({ message: "password not match" });
    }
    const user = await User.findOne({ username });
    if (user) {
      // console.log(2)
      return res.status(400).json({ error: "user already exist" });
    }
    const salt = await bcrypt.genSalt(10)
    const hashpassword=await bcrypt.hash(password,salt)
    const newuser = new User({ fullname, username, phone, password:hashpassword ,email});
    await newuser.save();

    req.login(newuser, (err) => {
      if (err) {
        return next(err);
      }
      return res
        .status(201)
        .json({ message: "User created successfully", user: newuser });
    });
  } catch (error) {
    res.status(400).json({ message: "error in signup" });
  }
});

route.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/auth/login/success",
    failureRedirect: "/auth/login/failed",
  })
);

export default route;

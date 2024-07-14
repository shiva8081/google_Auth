import express from "express";

import bcrypt from "bcrypt";
import User from "../model/user.js";

const route = express.Router();

route.post("/pass", async (req,res) => {

  if (!req.isAuthenticated()) {
    return res.status(401).send({ error: "user is not authenticated" });
  }
  const { oldpassword, newpassword, confirmnewpassword } = req.body;
 
 
  try {
   
    const user = await User.findById(req.user._id);

    if (!user) return res.send({ error: "user not found " });


    const isMatch = await bcrypt.compare(oldpassword, user.password);
    if (!isMatch) return res.send({ error: "old password not match" });

    if (newpassword !== confirmnewpassword) {
      return res.send({ error: "newpassword and confirmpassword not match" });
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newpassword, salt);

    await user.save();
    res.status(200).send({ message: "Password has been reset successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error in resetting password" });
  }
});

export default route;

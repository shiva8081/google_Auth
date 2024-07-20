import express from "express"
import POST from "../model/post.js";



const route =express.Router();



route.post("/addpost",async(req,res)=>{
    console.log(1)
    if(!req.isAuthenticated()){
       return res.status(401).send({error:"user is not authenticated"})
    }
    console.log(2)
    const{title,description}=req.body;
    const newpost= new POST({title,description,user:req.user._id});
    const savednote =await newpost.save();
    res.status(200).send(savednote)



})





export default route;
import mongoose from "mongoose";

const user =new mongoose.Schema({
  fullname: {
    type: "string",
    required: true,
  },
  username: {
    type: "string",
    required: true,
    unique: true,
  },
  phone: {
    type: "string",
    required: true,
    match: [/^[0-9]{10}$/, "Phone number must be 10 digits"],
  },
  password: {
    type: "string",
    required: true,
    minlength: 6,
  },
});

 const User = mongoose.model("User", user);
 export default User;

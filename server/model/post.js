import mongoose from "mongoose";

const post = new mongoose.Schema({
  user: {
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

const POST = mongoose.model("Post", post);
export default POST;

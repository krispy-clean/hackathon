import {model} from "mongoose";
import PostSchema from "../schemas/postSchema";

const postModel = model("Post", PostSchema);

export default postModel

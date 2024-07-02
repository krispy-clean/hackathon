import {model} from "mongoose";
import userSchema from "../schemas/userSchema";

const userModel = model("User", userSchema);
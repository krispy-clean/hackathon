import { model } from "mongoose";
import skillSchema from "../schemas/skillSchema";

const SkillModel = model("Skill", skillSchema);

export default SkillModel;

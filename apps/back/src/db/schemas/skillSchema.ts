import * as mongoose from "mongoose";
import { Schema } from "mongoose";

const schemaDeclaration = {
  name: {
    type: String,
    required: true,
  },
  missions: {
    type: mongoose.Types.ObjectId,
    ref: "Mission",
  },
  users: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
};

export type Skill = mongoose.InferRawDocType<typeof schemaDeclaration>;

const SkillSchema = new Schema(schemaDeclaration);

export default SkillSchema;

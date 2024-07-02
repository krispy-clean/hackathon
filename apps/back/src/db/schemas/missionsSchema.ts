import * as mongoose from "mongoose";
import { Schema } from "mongoose";

const schemaDeclaration = {
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true },
  budget: { type: Number, required: true, min: 0 },
  duration: { type: Number, required: true },
  usersPending: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  company: {
    type: mongoose.Types.ObjectId,
    ref: "Company",
  },
  selectUser: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  requirements: {
    type: String,
    required: true,
  },
  skills: {
    type: mongoose.Types.ObjectId,
    ref: "Skill",
  },
};

export type Mission = mongoose.InferRawDocType<typeof schemaDeclaration>;

const MissionSchema = new Schema(schemaDeclaration);

export default MissionSchema;

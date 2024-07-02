import * as mongoose from "mongoose";
import { InferRawDocType, Schema } from "mongoose";

const schemaDefinition = {
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
    required: true,
  },
  description: {
    type: String,
  },
  dailyFee: {
    type: Number,
    required: true,
    min: 0,
  },
  certifications: {
    type: mongoose.Types.ObjectId,
    ref: "Certification",
  },
  skills: {
    type: mongoose.Types.ObjectId,
    ref: "Skill",
  },
  posts: {
    type: mongoose.Types.ObjectId,
    ref: "Post",
  },
};

export type User = InferRawDocType<typeof schemaDefinition>;

const userSchema = new Schema(schemaDefinition);

export default userSchema;

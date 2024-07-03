import * as mongoose from "mongoose";
import { Schema } from "mongoose";

const schemaDeclaration = {
  name: {
    type: String,
    required: true,
  },
  lineOfBusiness: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    requiredNumber: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  passwordSalt: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  missions: {
    type: mongoose.Types.ObjectId,
    ref: "Mission",
  },
};

export type Company = mongoose.InferRawDocType<typeof schemaDeclaration>;

const companySchema = new Schema(schemaDeclaration);

export default companySchema;

import * as mongoose from "mongoose";
import { Schema } from "mongoose";

const schemaDeclaration = {
  name: {
    type: String,
    required: true,
  },
  users: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
};

export type Certification = mongoose.InferRawDocType<typeof schemaDeclaration>;

const certificationSchema = new Schema(schemaDeclaration);

export default certificationSchema;

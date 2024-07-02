import * as mongoose from "mongoose";
import { Schema } from "mongoose";

const schemaDeclaration = {
  title: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
};

export type Post = mongoose.InferRawDocType<typeof schemaDeclaration>;

const postSchema = new Schema(schemaDeclaration);

export default postSchema;

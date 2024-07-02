import {InferRawDocType, Schema} from "mongoose";

const schemaDefinition = {
    firstName: String,
    lastName: String,
}

const userSchema = new Schema(schemaDefinition);

export type User = InferRawDocType<typeof schemaDefinition>;

export default userSchema;
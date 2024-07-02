import { model } from "mongoose";
import certificationSchema from "../schemas/certificationSchema";

const certificationModel = model("Certification", certificationSchema);

export default certificationModel;

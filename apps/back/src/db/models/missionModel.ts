import { model } from "mongoose";
import missionsSchema from "../schemas/missionsSchema";

const missionModel = model("Mission", missionsSchema);

export default missionModel;

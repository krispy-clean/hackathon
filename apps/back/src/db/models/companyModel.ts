import { model } from "mongoose";
import companySchema from "../schemas/companySchema";

const companyModel = model("Company", companySchema);

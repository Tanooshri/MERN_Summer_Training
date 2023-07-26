import { SchemaType, SchemaTypes } from "mongoose";
import { AppConstants } from "../../../shared/utils/app-constants";



const schemaName = AppConstants.SCHEMA.USER_SCHEMA;
const Schema = moongoose.Schema;
const UserSchema = new Schema({
    email:{type:SchemaTypes.String, required:true, unique:true},
    password:{type:SchemaTypes.password}
});
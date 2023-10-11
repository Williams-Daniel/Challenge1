import mongoose, { Schema } from "mongoose";

interface iTask extends mongoose.Document {
  name: string;
  email:string
  task: string;
  priority: string;
  avatar: string;
  statedata: boolean;
}

const taskModel: Schema<iTask> = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  priority: {
    type: String,
  },
  task: {
    type: String,
  },
  avatar: {
    type: String,
  },
  statedata: {
    type: Boolean,
  }
},{timestamps:true});

export default mongoose.model<iTask>("tasks",taskModel)
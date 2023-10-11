import mongoose, { Schema } from "mongoose";

interface iDone extends mongoose.Document{
    nameAssign:string,
    taskAssign:string,
    priorityAssign:string,
    avatarAssign:string
}

const DoneModel:Schema<iDone> = new mongoose.Schema({
    nameAssign:{
        type:String
    },
    taskAssign:{
        type:String
    },
    priorityAssign:{
        type:String
    },
    avatarAssign:{
        type:String
    },
},{timestamps:true})

export default mongoose.model<iDone>("Dones",DoneModel)
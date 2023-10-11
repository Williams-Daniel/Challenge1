import mongoose, { Schema } from "mongoose"

interface iUser  extends mongoose.Document{
    userName:string
    email:string
    password:string
    avatar:string
    avatarID:string
    task:{}[]
}

 

const authModel: Schema<iUser> = new mongoose.Schema({
    userName:{
        type:String
    },
    email:{
        type:String,
        unique:true,
        trim:true
    },
    password:{
        type:String
    },
    avatar:{
        type:String
    },
    avatarID:{
        String
    },
    task:[{
        type: mongoose.Types.ObjectId,
        ref:"task"
    }]
 },{timestamps:true})

 export default mongoose.model<iUser>("userCollections",authModel)
import { Request, Response } from "express";
import bcrypt from "bcrypt"
import authModel  from "../models/authModel";
import { streamUpload } from "../utils/streamify";



export const registerUser = async(req:Request,res:Response)=>{
    try {
        const {userName,email,password} = req.body
        const {secure_url,public_id}:any = streamUpload(req)

        const salt = await bcrypt.genSalt(10)
        const hashed = await bcrypt.hash(password,salt)
        const user = await authModel.create({
            userName,
            email,
            password:hashed,
            avatar:secure_url,
            avatarID:public_id
        })
        return res.status(201).json({
            message:"registered user successfully!",
            data:user
        })

    } catch (error) {
        return res.status(400).json({
            message:"couldn't reguster user"
        })
    }
}

export const getUsers = async(req:Request,res:Response)=>{
    try {

        const allUser = await authModel.find().sort({createdAt:-1})
        return res.status(201).json({
            message:"gotten all users successfully!",
            data:allUser
        })

    } catch (error) {
        return res.status(400).json({
            message:"couldn't get all users"
        })
    }
}

export const getOneUser = async(req:Request,res:Response)=>{
    try {

        const {userID} = req.params
        const allUser = await authModel.findById(userID)
        return res.status(201).json({
            message:"gotten user successfully!",
            data:allUser
        })

    } catch (error) {
        return res.status(400).json({
            message:"couldn't get user"
        })
    }
}

export const deleteOneUser = async(req:Request,res:Response)=>{
    try {

        const {userID} = req.params
        const removeUser = await authModel.findByIdAndDelete(userID)
        return res.status(201).json({
            message:"deleted user successfully!",
            data:removeUser
        })

    } catch (error) {
        return res.status(400).json({
            message:"couldn't delete user"
        })
    }
}

export const signUserIn = async(req:Request,res:Response):Promise<Response>=>{
    try {
        const {email,password} = req.body

        const user = await authModel.findOne({email})
        if(user){
            const check = await bcrypt.compare(password,user.password)
            if(check){
                return res.status(200).json({
                    message:`Weclome back ${user.userName}`
                })
            }else{
                return res.status(404).json({
                    message:"Invalid password"
                })
            }
        } else{
            return  res.status(404).json({
                message:"User not found"
            })
        }
    } catch (error) {
        return  res.status(404).json({
            message:"Error found",
        })
    }
}



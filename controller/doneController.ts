import { Request, Response } from "express";
import doneModel from "../models/doneModel";




export const createDone =  async(req:Request,res:Response)=>{
    try {
       const {nameAssign,taskAssign,priorityAssign,avatarAssign} =req.body  

       const doneUser = await doneModel.create(req.body)

       return res.status(201).json({
        message:"done task created"
       })
    } catch (error) {
        return res.status(404).json({
            message:"couldn't create done task"
           })
    }
}
export const getDoneTask =  async(req:Request,res:Response)=>{
    try {
       const allDoneUser = await doneModel.find()

       return res.status(201).json({
        message:"done task gotten",
        data:allDoneUser
       })
    } catch (error) {
        return res.status(404).json({
            message:"couldn't create done task"
           })
    }
}
export const getOneDoneTask =  async(req:Request,res:Response)=>{
    try {

        const {_id} = req.params
       const allDoneUser = await doneModel.findById({_id})

       return res.status(201).json({
        message:"done task gotten",
        data:allDoneUser
       })
    } catch (error) {
        return res.status(404).json({
            message:"couldn't get al done task"
           })
    }
}
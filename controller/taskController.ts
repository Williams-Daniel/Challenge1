import { Request, Response } from "express";
import authModel from "../models/authModel";
import taskModel from "../models/taskModel";
import mongoose from "mongoose";


export const createTask = async(req:Request,res:Response):Promise<Response>=>{
    try {
        const {email,task,priority} = req.body

        const user = await authModel.findOne({email})

        const createTask = await taskModel.create({
            task,
            priority,
            name:user?.userName,
            avatar:user?.avatar,
        })

        user?.task.push(new mongoose.Types.ObjectId(createTask.id))
        user?.save()

        return res.status(201).json({
            message:"task created successfully",
            data:createTask
        })
    } catch (error) {
        return res.status(201).json({
            message:"task couldn't be created"
        })
    }
}

export const getuserTasks = async(req:Request,res:Response):Promise<Response>=>{
    try {
        const {_id} = req.params

        const userTasks = await authModel.findById({_id}).populate({
            path:"task"
        })
        console.log(userTasks)
        return res.status(201).json({
            message:"user tasks gotten successfully",
            data:userTasks
        })
    } catch (error) {
        return res.status(201).json({
            message:"task couldn't be gotten",
        })
    }
}

export const getAllTasks = async(req:Request,res:Response):Promise<Response>=>{
    try {

        const allTasks = await taskModel.find()
        return res.status(201).json({
            message:"all tasks gotten successfully",
            data:allTasks
        })
    } catch (error) {
        return res.status(201).json({
            message:"tasks couldn't be gotten"
        })
    }
}

export const getOneTask = async(req:Request,res:Response):Promise<Response>=>{
    try {
        const {taskID} = req.params
        const oneTasks = await taskModel.findById(taskID)
        return res.status(201).json({
            message:" tasks gotten successfully",
            data:oneTasks
        })
    } catch (error) {
        return res.status(201).json({
            message:"tasks couldn't be gotten"
        })
    }
}

export const deleteOneTask = async(req:Request,res:Response):Promise<Response>=>{
    try {
        const {taskID} = req.params
        const oneTasks = await taskModel.findByIdAndDelete
        (taskID)
        return res.status(201).json({
            message:" tasks deleted successfully",
            data:oneTasks
        })
    } catch (error) {
        return res.status(201).json({
            message:"tasks couldn't be deleted"
        })
    }
}

export const updateTaskState = async(req:Request,res:Response):Promise<Response>=>{
    try {
        const {taskID} = req.params
        const {statedata} = req.body
        const oneTasks = await taskModel.findByIdAndUpdate(
            taskID,
            {statedata},
            {new:true}
        )
        return res.status(201).json({
            message:" taskdata updated successfully",
            data:oneTasks
        })
    } catch (error) {
        return res.status(201).json({
            message:"taskdata couldn't be updated"
        })
    }
}






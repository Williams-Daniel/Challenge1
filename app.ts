import express, { Application, Request, Response } from "express"
import cors from "cors"
 import auth from "./Router/authRouter"
 import task from "./Router/taskRouter"
import done from "./Router/doneRouter"
export const appConfig = (app:Application)=>{
    app.use(express.json())
    app.use(cors())
    
    app.use("/api",auth)
    app.use("/api",task)
    app.use("/api",done)

    app.get("/",(req:Request,res:Response)=>{
        try {
            res.status(200).json({
                message:"Everything is working fine"
            })
        } catch (error) {
            console.log(error)
        }
    })
}
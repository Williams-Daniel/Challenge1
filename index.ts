import express, { Application } from "express"
import env from "dotenv"
import { dbConfig } from "./utils/DB"
import { appConfig } from "./app"

env.config()

const port:string = process.env.PORT!

const app:Application = express()

appConfig(app)
const server = 
app.listen(process.env.PORT || port, ()=>{
    console.log("")
    console.log("A server is connected on port: ",port)
    dbConfig()
})

process.on("uncaughtException",(error:Error)=>{
    console.log("a server is shutting down due to uncaughtException:", error)
    process.exit(1)
})

process.on("unhandledRejection",(reason:any)=>{
    console.log("a server is shutting down due to uncaughtException:", reason)
    server.close(()=>{
        process.exit(1)
    })
})

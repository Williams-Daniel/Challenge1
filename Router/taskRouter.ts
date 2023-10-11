import express, { Router } from "express"
import { createTask, deleteOneTask,getAllTasks,getOneTask, getuserTasks, updateTaskState } from "../controller/taskController"


const router:Router = express.Router()

router.route("/create-task").post(createTask)
router.route("/get-all-task").get(getAllTasks)
router.route("/:_id/get-user-tasks").get(getuserTasks)
router.route("/:taskID/get-one-task").get(getOneTask)
router.route("/:taskID/delete-one-task").delete(deleteOneTask)
router.route("/:taskID/update-one-task").patch(updateTaskState)

export default router
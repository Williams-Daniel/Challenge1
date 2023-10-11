import express from "express"
import { createDone, getDoneTask, getOneDoneTask } from "../controller/doneController"


const router = express.Router()

router.route("/create-done").post(createDone)
router.route("/get-done-task").get(getDoneTask)
router.route("/:_id/create-done").post(getOneDoneTask)

export default router
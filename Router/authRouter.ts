import express, { Router } from "express"
import { deleteOneUser, getOneUser, getUsers, registerUser, signUserIn } from "../controller/authController"
import multer from "multer"

const upload = multer().single("avatar")

const router:Router = express.Router()

router.route("/register").post(upload,registerUser)
router.route("/get-users").get(getUsers)
router.route("/:userID/get-one-users").get(getOneUser)
router.route("/:userID/delete-one-users").delete(deleteOneUser)
router.route("/sign-user-in").post(signUserIn)



export default router
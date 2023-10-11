"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taskController_1 = require("../controller/taskController");
const router = express_1.default.Router();
router.route("/create-task").post(taskController_1.createTask);
router.route("/get-all-task").get(taskController_1.getAllTasks);
router.route("/:_id/get-user-tasks").get(taskController_1.getuserTasks);
router.route("/:taskID/get-one-task").get(taskController_1.getOneTask);
router.route("/:taskID/delete-one-task").delete(taskController_1.deleteOneTask);
router.route("/:taskID/update-one-task").patch(taskController_1.updateTaskState);
exports.default = router;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTaskState = exports.deleteOneTask = exports.getOneTask = exports.getAllTasks = exports.getuserTasks = exports.createTask = void 0;
const authModel_1 = __importDefault(require("../models/authModel"));
const taskModel_1 = __importDefault(require("../models/taskModel"));
const mongoose_1 = __importDefault(require("mongoose"));
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, task, priority } = req.body;
        const user = yield authModel_1.default.findOne({ email });
        const createTask = yield taskModel_1.default.create({
            task,
            priority,
            name: user === null || user === void 0 ? void 0 : user.userName,
            avatar: user === null || user === void 0 ? void 0 : user.avatar,
        });
        user === null || user === void 0 ? void 0 : user.task.push(new mongoose_1.default.Types.ObjectId(createTask.id));
        user === null || user === void 0 ? void 0 : user.save();
        return res.status(201).json({
            message: "task created successfully",
            data: createTask
        });
    }
    catch (error) {
        return res.status(201).json({
            message: "task couldn't be created"
        });
    }
});
exports.createTask = createTask;
const getuserTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.params;
        const userTasks = yield authModel_1.default.findById({ _id }).populate({
            path: "task"
        });
        console.log(userTasks);
        return res.status(201).json({
            message: "user tasks gotten successfully",
            data: userTasks
        });
    }
    catch (error) {
        return res.status(201).json({
            message: "task couldn't be gotten",
        });
    }
});
exports.getuserTasks = getuserTasks;
const getAllTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allTasks = yield taskModel_1.default.find();
        return res.status(201).json({
            message: "all tasks gotten successfully",
            data: allTasks
        });
    }
    catch (error) {
        return res.status(201).json({
            message: "tasks couldn't be gotten"
        });
    }
});
exports.getAllTasks = getAllTasks;
const getOneTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { taskID } = req.params;
        const oneTasks = yield taskModel_1.default.findById(taskID);
        return res.status(201).json({
            message: " tasks gotten successfully",
            data: oneTasks
        });
    }
    catch (error) {
        return res.status(201).json({
            message: "tasks couldn't be gotten"
        });
    }
});
exports.getOneTask = getOneTask;
const deleteOneTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { taskID } = req.params;
        const oneTasks = yield taskModel_1.default.findByIdAndDelete(taskID);
        return res.status(201).json({
            message: " tasks deleted successfully",
            data: oneTasks
        });
    }
    catch (error) {
        return res.status(201).json({
            message: "tasks couldn't be deleted"
        });
    }
});
exports.deleteOneTask = deleteOneTask;
const updateTaskState = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { taskID } = req.params;
        const { statedata } = req.body;
        const oneTasks = yield taskModel_1.default.findByIdAndUpdate(taskID, { statedata }, { new: true });
        return res.status(201).json({
            message: " taskdata updated successfully",
            data: oneTasks
        });
    }
    catch (error) {
        return res.status(201).json({
            message: "taskdata couldn't be updated"
        });
    }
});
exports.updateTaskState = updateTaskState;

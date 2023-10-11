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
exports.getOneDoneTask = exports.getDoneTask = exports.createDone = void 0;
const doneModel_1 = __importDefault(require("../models/doneModel"));
const createDone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nameAssign, taskAssign, priorityAssign, avatarAssign } = req.body;
        const doneUser = yield doneModel_1.default.create(req.body);
        return res.status(201).json({
            message: "done task created"
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "couldn't create done task"
        });
    }
});
exports.createDone = createDone;
const getDoneTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allDoneUser = yield doneModel_1.default.find();
        return res.status(201).json({
            message: "done task gotten",
            data: allDoneUser
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "couldn't create done task"
        });
    }
});
exports.getDoneTask = getDoneTask;
const getOneDoneTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.params;
        const allDoneUser = yield doneModel_1.default.findById({ _id });
        return res.status(201).json({
            message: "done task gotten",
            data: allDoneUser
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "couldn't get al done task"
        });
    }
});
exports.getOneDoneTask = getOneDoneTask;

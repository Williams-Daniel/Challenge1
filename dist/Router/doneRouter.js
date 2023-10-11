"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const doneController_1 = require("../controller/doneController");
const router = express_1.default.Router();
router.route("/create-done").post(doneController_1.createDone);
router.route("/get-done-task").get(doneController_1.getDoneTask);
router.route("/:_id/create-done").post(doneController_1.getOneDoneTask);
exports.default = router;

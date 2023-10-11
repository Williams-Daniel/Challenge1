"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const authModel = new mongoose_1.default.Schema({
    userName: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        trim: true
    },
    password: {
        type: String
    },
    avatar: {
        type: String
    },
    avatarID: {
        String
    },
    task: [{
            type: mongoose_1.default.Types.ObjectId,
            ref: "task"
        }]
}, { timestamps: true });
exports.default = mongoose_1.default.model("userCollections", authModel);

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const URL = process.env.DB_STRING;
const dbConfig = () => {
    try {
        mongoose_1.default.connect(URL).then(() => {
            console.log("");
            console.log("database connected successfully🚀🚀👏👏");
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.dbConfig = dbConfig;

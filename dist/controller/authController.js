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
exports.signUserIn = exports.deleteOneUser = exports.getOneUser = exports.getUsers = exports.registerUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const authModel_1 = __importDefault(require("../models/authModel"));
const streamify_1 = require("../utils/streamify");
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userName, email, password } = req.body;
        const { secure_url, public_id } = (0, streamify_1.streamUpload)(req);
        const salt = yield bcrypt_1.default.genSalt(10);
        const hashed = yield bcrypt_1.default.hash(password, salt);
        const user = yield authModel_1.default.create({
            userName,
            email,
            password: hashed,
            avatar: secure_url,
            avatarID: public_id
        });
        return res.status(201).json({
            message: "registered user successfully!",
            data: user
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "couldn't reguster user"
        });
    }
});
exports.registerUser = registerUser;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUser = yield authModel_1.default.find().sort({ createdAt: -1 });
        return res.status(201).json({
            message: "gotten all users successfully!",
            data: allUser
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "couldn't get all users"
        });
    }
});
exports.getUsers = getUsers;
const getOneUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userID } = req.params;
        const allUser = yield authModel_1.default.findById(userID);
        return res.status(201).json({
            message: "gotten user successfully!",
            data: allUser
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "couldn't get user"
        });
    }
});
exports.getOneUser = getOneUser;
const deleteOneUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userID } = req.params;
        const removeUser = yield authModel_1.default.findByIdAndDelete(userID);
        return res.status(201).json({
            message: "deleted user successfully!",
            data: removeUser
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "couldn't delete user"
        });
    }
});
exports.deleteOneUser = deleteOneUser;
const signUserIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield authModel_1.default.findOne({ email });
        if (user) {
            const check = yield bcrypt_1.default.compare(password, user.password);
            if (check) {
                return res.status(200).json({
                    message: `Weclome back ${user.userName}`
                });
            }
            else {
                return res.status(404).json({
                    message: "Invalid password"
                });
            }
        }
        else {
            return res.status(404).json({
                message: "User not found"
            });
        }
    }
    catch (error) {
        return res.status(404).json({
            message: "Error found",
        });
    }
});
exports.signUserIn = signUserIn;

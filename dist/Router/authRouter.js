"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controller/authController");
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)().single("avatar");
const router = express_1.default.Router();
router.route("/register").post(upload, authController_1.registerUser);
router.route("/get-users").get(authController_1.getUsers);
router.route("/:userID/get-one-users").get(authController_1.getOneUser);
router.route("/:userID/delete-one-users").delete(authController_1.deleteOneUser);
router.route("/sign-user-in").post(authController_1.signUserIn);
exports.default = router;

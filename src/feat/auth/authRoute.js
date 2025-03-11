const express = require("express");
const { signUpController, loginController } = require("./authController");


const authRouter = express.Router();

authRouter.post("/signup", signUpController);
authRouter.post("/login", loginController);

module.exports = authRouter;
const express = require("express");
const authRouter = require("../feat/auth/authRoute");

const router = express.Router();


router.use("/auth", authRouter)

module.exports = router;
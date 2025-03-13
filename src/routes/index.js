const express = require("express");
const authRouter = require("../feat/auth/authRoute");
const interviwRouter = require("../feat/interviewSession/interviewRoute");


const router = express.Router();


router.use("/auth", authRouter);
router.use("/interview", interviwRouter);


module.exports = router;
const express = require("express");
const { createInterviewController } = require("./interviewController");

const interviwRouter = express.Router();

router.post("/create", createInterviewController);

module.exports = interviwRouter;
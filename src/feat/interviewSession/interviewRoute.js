const express = require("express");
const InterviewController = require("./interviewController");


const interviwRouter = express.Router();

interviwRouter.post("/create", InterviewController.createInterview);
interviwRouter.get("/", InterviewController.getAllInterviews);
interviwRouter.get("/:id", InterviewController.getInterviewById);

module.exports = interviwRouter;
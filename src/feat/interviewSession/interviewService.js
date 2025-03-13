const InterviewModel = require("./interviewModel");

//Create a new interview session
 
const createInterview = async (title, description, questions) => {
    // Ensuring valid input
  if (!title || !description || !questions || !Array.isArray(questions)) {
    throw new Error("Invalid input. Ensure title, description, and an array of questions are provided.");
  }

  const interview = new InterviewModel({ title, description, questions });
  await interview.save();

  return interview;
}

module.exports = { createInterview }

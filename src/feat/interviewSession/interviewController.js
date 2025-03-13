const { createInterview } = require("./interviewService");

/**
 * Create Interview Session Controller
 */
const createInterviewController = async (req, res) => {
  try {
    const { title, description, questions } = req.body;
    const interview = await createInterview(title, description, questions);
    res.status(201).json({ message: "Interview session created successfully", interview });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = { createInterviewController }


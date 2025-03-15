const InterviewService = require("./interviewService");

 // Create Interview Session Controller
 class InterviewController {
  static async createInterview (req, res) {
    try {
    const { title, description, questions } = req.body;
    const interview = await InterviewService.createInterview(title, description, questions);
    res.status(201).json({ message: "Interview session created successfully", interview });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Fetch all interviews
static async getAllInterviews (req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const interviews = await InterviewService.getAllInterviews(page, limit);
    res.status(200).json(interviews);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get an interview by Id
static async getInterviewById (req, res) {
  try {
    const { id } = req.params;
    const interview = await InterviewService.getInterviewById(id);
    res.status(200).json(interview);
    
  } catch (error) {
    res.status(404).json({ message: error.message });
  }

}
}

module.exports = InterviewController;

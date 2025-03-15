const InterviewModel = require("./interviewModel");

class InterviewService {
  //Create a new interview session
  static async createInterview(title, description, questions) {
    // Ensuring valid input
  if (!title || !description || !questions || !Array.isArray(questions)) {
    throw new Error("Invalid input. Ensure title, description, and an array of questions are provided.");
  }

  const interview = new InterviewModel({ title, description, questions });
  await interview.save();

  return interview;

};

//Fetch all interviews
static async getAllInterviews(page = 1, limit = 10){
  const skip = (page - 1) * limit;

  const interviews = await InterviewModel.find()
    .sort({ createdAt: -1 }) // Sort bynewest first
    .skip(skip)
    .limit(limit);

  //Count total interview
  const totalInterviews = await InterviewModel.countDocuments();

  return {
    page,
    totalPages: Math.ceil(totalInterviews / limit),
    totalInterviews,
    interviews
  };
 
};

//Get an interview by Id
static async getInterviewById(interviewId){
  const interview = await InterviewModel.findById(interviewId);
  if (!interview) throw new Error("Interview not found");
  return interview;
}

}

 
module.exports = InterviewService

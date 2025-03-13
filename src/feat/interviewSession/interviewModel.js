const mongoose = require("mongoose");

const InterviewSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
},
  description: { 
    type: String, 
    required: true 
},
  questions: [{ 
    type: String, 
    required: true 
}], 
}, 
{ timestamps: true });

const InterviewModel = mongoose.model("Interview", InterviewSchema);

module.exports = InterviewModel;

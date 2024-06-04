const mongoose = require("mongoose");
const { Schema } = mongoose;

const EmployeeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid email address"],
  },
  contact: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  technologies: {
    type: [String],
    required: true,
    enum: ["PHP", "React JS", "Node JS", "Express JS", "Flutter", "Java", "C"],
  },
  skills: {
    type: [String],
    required: true,
    enum: ["HTML", "CSS", "BOOTSTRAP"],
  },
  link: {
    type: String,
    required: true,
  },
  Education: [
    {
      collage_name: {
        type: String,
        required: true,
      },
      join_date: {
        type: Date,
        default: Date.now,
      },
      leave_date: {
        type: Date,         
        default: Date.now,
      },
      description: {
        type: String,
        required: true,
      },
      course_type: {
        type: String,
        required: true,
        enum: ["B.Tech", "BBA", "MBA", "MCA", "BCA"],
      },
    },
  ],
  Experience: [
    {
      company_name: {
        type: String,
        required: true,
      },
      join_date: {
        type: Date,
        default: Date.now,
      },
      resine_date: {
        type: Date,
        default: Date.now,
      },
      post_description: {
        type: String,
        required: true,
      },
    },
  ],
});

const Personal = mongoose.model("employee", EmployeeSchema, "employee");

module.exports = Personal;

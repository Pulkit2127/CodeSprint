const mongoose = require("mongoose");
const { CONN_STR } = require("./config");

mongoose.connect(CONN_STR);

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  fullname: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
});

const problemSchema = new mongoose.Schema({
  pNo: Number,
  name: String,
  description: String,
  level: {
    type: String,
    enum: ["Easy", "Medium", "Hard"],
    required: true,
  },
  examples: [
    {
      input: String,
      output: String,
      explaination: String,
    },
  ],
  constraints: [String],
  snippet: String,
  driverCode: String,
  tags: [String],
  tip: String,
});

const User = mongoose.model("Users", userSchema);
const Problem = mongoose.model("Problems", problemSchema);

module.exports = {
  User,
  Problem,
};

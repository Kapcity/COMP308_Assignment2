let mongoose = require("mongoose");

//create a model class

let tasklistSchema = mongoose.Schema(
  {
    Name: String,
    Task: String,
    Description: String,
    Due_Date: String
  },
  {
    collection: "first"
  }
);

module.exports = mongoose.model("COMP308_Assignment2", tasklistSchema);

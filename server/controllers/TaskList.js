let express = require("express");
let router = express.Router();
let jwt = require("jsonwebtoken");

//create reference for to the Tasklist Schema
let todo = require("../model/TaskList");

//displays all task in a list
module.exports.displayTasklist = (req, res, next) => {
  todo.find((err, ToDoList) => {
    if (err) {
      return console.error(err);
    } else {
      // console.log(ToDoList);

      return res.json({
        success: true,
        msg: "Task List displayed successfully",
        ToDoList,
        user: req.user
      });
    }
  });
};
//gets add page
module.exports.AddTask = (req, res, next) => {
  return res.json({
    success: true,
    msg: "Add Task Page displayed successfully"
  });
};
//on click adds to the list
module.exports.AddPost = (req, res, next) => {
  let newTask = todo({
    Name: req.body.Name,
    Task: req.body.Task,
    Description: req.body.Description,
    Due_Date: req.body.Due_Date
  });
  todo.create(newTask, (err, todo) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      console.log(newTask);
      return res.json({ success: true, msg: "Successfully added new task" });
    }
  });
};

//gets edit page and all its values
module.exports.EditGet = (req, res, next) => {
  let id = req.params.id;
  todo.findById(id, (err, TaskObject) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      return res.json({
        success: true,
        msg: "Edit Task displayed successfully",
        task: TaskObject
      });
    }
  });
};

//After Edit updates the table
module.exports.EditPost = (req, res, next) => {
  let id = req.params.id;

  let updateTask = todo({
    _id: id,
    Name: req.body.Name,
    Task: req.body.Task,
    Description: req.body.Description,
    Due_Date: req.body.Due_Date
  });

  todo.update({ _id: id }, updateTask, err => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      return res.json({
        success: true,
        msg: "Successfully updated task"
      });
    }
  });
};

//get request for delete on the database
module.exports.DeleteTask = (req, res, next) => {
  let id = req.params.id;

  todo.remove({ _id: id }, err => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      return res.json({ success: true, msg: "Task successfully deleted" });
    }
  });
};

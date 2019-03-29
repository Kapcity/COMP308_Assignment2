let express = require("express");
let router = express.Router();


//create reference for to the Tasklist Schema
let todo = require("../model/TaskList");

//displays all task in a list
module.exports.displayTasklist = (req, res, next) => {
  todo.find((err, ToDoList) => {

    if (err) {
      return console.error(err);
    }
    else {
      // console.log(ToDoList);

      res.render("Tasks/index", {
        title: "Task List",
        ToDoList: ToDoList
      });
    }
  });
}
//gets add page
module.exports.AddTask = (req, res, next) => {
  res.render("Tasks/add", {
    title: "Add new Task"
  });
};
//on click adds to the list
module.exports.AddPost = (req, res, next) => {

  let newTask = todo({
    "Name": req.body.name,
    "Task": req.body.task,
    "Description": req.body.desc,
    "Due_Date": req.body.date

  });
  todo.create(newTask, (err, todo) => {
    if (err) {
      console.log(err);
      res.end(err);
    }
    else {
      res.redirect('/task-list')
    }
  });
};

//gets id for edit page and all its values
module.exports.EditGet = (req, res, next) => {
  let id = req.params.id;
  todo.findById(id, (err, TaskObject) => {

    if (err) {
      console.log(err);
      res.end(err);
    }
    else {
      res.render('Tasks/edit', {
        title: 'Edit Task List',
        Task: TaskObject
      });
    }
  });

};

//After Edit updates the table
module.exports.EditPost = (req, res, next) => {
  let id = req.params.id;

  let updateTask = todo({
    "_id": id,
    "Name": req.body.name,
    "Task": req.body.task,
    "Description": req.body.desc,
    "Due_Date": req.body.date

  });

  todo.update({ _id: id }, updateTask, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    }
    else {
      res.redirect('/task-list');
    }
  })

};

//get request for delete on the database
module.exports.DeleteTask = (req, res, next) => {
  let id = req.params.id;


  todo.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    }
    else {
      res.redirect('/task-list');
    }
  })

};





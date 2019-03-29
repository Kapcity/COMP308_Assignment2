let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//create reference for to the Tasklist Schema
let todo = require("../model/TaskList");

/* get To Do List page - Read Operation */
router.get("/", (req, res, next) => {
  todo.find((err, ToDoList) => {
    if (err) {
      return console.error(err);
    } else { 
      console.log(ToDoList);

      res.render("Tasks/index", {
        title: "Task List",
        ToDoList: ToDoList
      });
    }
  });
});

router.get("/add", (req, res, next) => {
  res.render("Tasks/add", {
    title: "Add new Task"
  });
});

//create post for procressing add page
router.post('/add', (req,res,next) => {
    
    let newTask = todo({
        "Name": req.body.name,
        "Task": req.body.task,
        "Description": req.body.desc,
        "Due_Date" : req.body.date

    });
    todo.create(newTask, (err, todo) =>
    {
        if (err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/task-list')
        }
    });
});
//create a reference to the db schema
module.exports = router;

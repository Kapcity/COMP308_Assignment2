 let express = require('express');
 let router = express.Router();
 let mongoose = require('mongoose');


//create reference for to the Tasklist Schema
let todo = require('../model/TaskList');

/* get To Do List page - Read Operation */
router.get('/', (req, res, next) => {
     todo.find((err, ToDoList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            console.log(ToDoList)
            
            res.render('Tasks/index', {
                title: 'Task List',
                ToDoList: ToDoList
            });

            
   
        }
    });
});


 //create a reference to the db schema
 module.exports = router;

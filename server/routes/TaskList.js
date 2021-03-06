let express = require("express");
let router = express.Router();

let jwt = require('jsonwebtoken');
let passport = require('passport');
//create reference for to the Tasklist Schema
let todo = require("../model/TaskList");

let TaskListController = require('../controllers/TaskList')

function requireAuth(req,res, neext) {
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

router.get('/',TaskListController.displayTasklist);


router.get("/add",TaskListController.AddTask);

//create post for procressing add page
router.post('/add',TaskListController.AddPost);


//Get request for the display edit page
router.get('/edit/:id', TaskListController.EditGet);


//Post method to update the list
router.post('/edit/:id',  TaskListController.EditPost);


//get request for delete on the database
router.get('/delete/:id', TaskListController.DeleteTask);


//create a reference to the db schema
module.exports = router;

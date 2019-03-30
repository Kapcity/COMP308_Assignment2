let express = require("express");
let router = express.Router();

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

router.get('/',requireAuth, TaskListController.displayTasklist);


router.get("/add",requireAuth,TaskListController.AddTask);

//create post for procressing add page
router.post('/add', requireAuth,TaskListController.AddPost);


//Get request for the display edit page
router.get('/edit/:id',requireAuth, TaskListController.EditGet);


//Post method to update the list
router.post('/edit/:id', requireAuth, TaskListController.EditPost);


//get request for delete on the database
router.get('/delete/:id',requireAuth , TaskListController.DeleteTask);


//create a reference to the db schema
module.exports = router;

let express = require("express");
let router = express.Router();
let passport = require("passport");
let mongoose = require("mongoose");

let jwt = require('jsonwebtoken');
let DB = require('../config/db');

//Define user model
let usermodel = require("../model/user");
let User = usermodel.User;

/*

module.exports.displayHomePage = (req, res, next) => {
  res.render("index", {
    title: "Home",
    displayName: req.user ? req.user.displayName : ""
  });
};

module.exports.displayAboutPage = (req, res, next) => {
  res.render("index", {
    title: "About Me",
    displayName: req.user ? req.user.displayName : ""
  });
};

module.exports.displayProjectPage = (req, res, next) => {
  res.render("index", {
    title: "Projects",
    displayName: req.user ? req.user.displayName : ""
  });
};

module.exports.displayServicesPage = (req, res, next) => {
  res.render("index", {
    title: "Services",
    displayName: req.user ? req.user.displayName : ""
  });
};

module.exports.displayContactPage = (req, res, next) => {
  res.render("index", {
    title: "Contact",
    displyaName: req.user ? req.user.displayName : ""
  });
};

module.exports.displayEducationPage = (req, res, next) => {
  res.render("index", {
    title: "Education",
    displayName: req.user ? req.user.displayName : ""
  });
};

module.exports.DisplayLogin = (req, res, next) => {
  //check if user is logged in

  if (!req.user) {
    res.render("auth/login", {
      title: "Login",
      message: req.flash("loginMessage"),
      displayName: req.user ? req.user.displayName : ""
    });
  }
  else
  {
    res.redirect("/");    
  }
};
*/
module.exports.ProcessLogin =  (req, res, next) => {
  passport.authenticate('local', 
  (err, user, info) => {
    // checks for error
    if(err) {
      return next(err);
    }
    //User error check
    if(!user) {
//req.flash("loginMessage", "Authentication Error");
      return res.json({success: false, msg: "Error: Failed to Login"});
    }
    req.logIn(user, (err) => {
      if(err) {
        return next(err);
      }
      const payload = {
        id: user._id,
        displayName: user.displayName,
        username: user.username,
        email: user,email
      }

      const authToken = jwt.sign(payload, DB.secret, {
        expiresIn: 604800 //1 week
      });
      return res.json({success: true, msg: "User Logged in Successfully", user: {
        id: user._id,
        displayName: user.displayName,
        username: user.username,
        email: user.email
      }, toke: authToken});
    });
  })(req, res, next);
  console.log(req.body);

};


/*
module.exports.DisplayReg = (req, res, next) => {
  //TO DO

  if (!req.user) {
    res.render("auth/register", {
      title: "Register",
      message: req.flash("registerMessage"),
      displayName: req.user ? req.user.displayName : ""
    });
  } else {
    res.redirect("/"); 
  }
};
*/

module.exports.ProcessReg = (req, res, next) => {
  let newUser = new User({
    username: req.body.username,
    email: req.body.email,
    displayName: req.body.displayName
  });

  User.register(newUser, req.body.password, (err) => {
    if (err) {
      console.log("Error: inserting new user");

      if (err.name == "UserExistsError") {
       
        console.log("Error: User Already Exists");
      }

      return res.json({success: false, msg: "Error: Failed to Register User"});
    } else {
      //redirect user after method pass
      return res.json({success: true, msg: "User Registered Successfully"});
    }
  });
};
module.exports.LoggoutPost = (req, res, next) => {
  //Logout method

  req.logout();
  return res.json({success: true, msg: "User logged out Successfully"});
};

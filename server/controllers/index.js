let express = require("express");
let router = express.Router();
let passport = require("passport");
let mongoose = require("mongoose");

//Define user model
let usermodel = require("../model/user");
let User = usermodel.User;

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

module.exports.ProcessLogin =  (req, res, next) => {
  passport.authenticate('local', 
  (err, user, info) => {
    // checks for error
    if(err) {
      return next(err);
    }
    //User error check
    if(!user) {
      req.flash("loginMessage", "Authentication Error");
      return res.redirect('/login');
    }
    req.logIn(user, (err) => {
      if(err) {
        return next(err);
      }
      return res.redirect('/task-list');
    });
  })(req, res, next);
  console.log(req.body);

};



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
        req.flash("registerMessage", "Registration Error: User Already Exists");
        console.log("Error: User Already Exists");
      }

      return res.render("auth/register", {
        title: "Register",
        message: req.flash("registerMessage"),
        displayName: req.User ? req.User.displayName : ""
      });
    } else {
      //redirect user after method pass
      return passport.authenticate("local")(req, res, () => {
        res.redirect("/task-list");
        console.log(req.body);
      });
    }
  });
};
module.exports.LoggoutPost = (req, res, next) => {
  //Logout method

  req.logout();
  res.redirect("/");
};

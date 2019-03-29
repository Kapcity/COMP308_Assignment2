//require modules for our User Model
let mongoose = require("mongoose");
let passportLocalMongoose = require("passport-local-mongoose");

let userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      default: "",
      trim: true,
      require: "Username is required"
    },
    /* password will be encrypted in password-local-mongoose which makes this unnessisary
password:{
    type: String,
    default: '',
    trim: true,
    require: 'Password is required'

}
*/
    email: {
      type: String,
      default: "",
      trim: true,
      require: "Email is required"
    },
    displayName: {
      type: String,
      default: "",
      trim: true,
      require: "Display Name is required"
    },
    created: {
      type: Date,
      default: Date.now
    },
    update: {
      type: Date,
      default: Date.now
    }
  },
  {
    collection: "users"
  }
);


//configuration options for UserSchema

let options =({
    missingPasswordError:"Wrong / Missing Password"
});

userSchema.plugin(passportLocalMongoose, options);
module.exports.User = mongoose.model('User', userSchema);
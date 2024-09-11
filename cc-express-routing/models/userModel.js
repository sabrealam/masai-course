const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { 
    type: String,
     required: true, 
    validate : function (value) {
      if (value.length < 3) {
        throw new Error("Username must be at least 3 characters long");
      }
    }
   }, 
  email: { 
    type: String, 
    required: true,
     unique: true,
     validate : function (value) {
      if (!value.includes("@")) {
        throw new Error("Email must contain @");
      }
      let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!value.match(regex)) {
        throw new Error("Email must be valid");
      }
       
     }
    
    },

  password: { 
    type: String,
     required: true,
     minlength: 6
     },
});
 

module.exports = mongoose.model("User", userSchema);

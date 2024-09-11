const User = require('../models/userModel');


function allUsers (req, res){

  const users = User.find();

  res.send(users);

}

function addUser (req, res){
    let {username, email, password} = req.body;
    try {
        let isUserExist = User.findOne({email});
        if (isUserExist) {
            throw new Error('User already exist')
        }
        const user = new User({username, email, password});
        user.save();
        res.send(user)
    } catch (error) {
      res.status(400).send(error)
    }
}

function updateUser (req, res){
    let {username, email, password} = req.body;
    try {
        let isUserExist = User.findOne({email});
        if (isUserExist) {
            throw new Error('User already exist')
        }
        const user = new User({username, email, password});
        user.save();
        res.send(user)
    } catch (error) {
      res.status(400).send(error)
    }
   
}

function deleteUser (req, res){
 let id = req.params.id;
 try {
      let isUserExist = User.findById(id);
      if (!isUserExist) {
          throw new Error('User not found')
      }
      const user = User.findByIdAndDelete(id);
      res.send(user)
 } catch (error) {
  res.status(400).send(error)
 }
  
}

module.exports = {
  allUsers,
  addUser,
  updateUser,
  deleteUser
}
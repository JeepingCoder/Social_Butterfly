const {User, Thought} = require("../models");

const getAllUsers = (req,res) => {
    User.find({})
    
}
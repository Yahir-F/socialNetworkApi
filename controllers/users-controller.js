const {User} = require('../models');

const userController = {

newUser({body}, res) {
    User.create(body)
    .then(UserData => res.json(UserData))
    .catch(err => res.status(500).json(err));
},

allUsers(req, res){
    User.find({})
    .populate({path: 'friends', select: '-__v'})
    .select('-__v')
    .then(UserData => res.json(UserData))
    .catch(err => {
        console.log(err);
    })
},



}
module.exports = userController;
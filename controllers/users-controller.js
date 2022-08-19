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
 
addFriend({params}, res) {
    User.findOneAndUpdate({_id: params.id}, {$push: {friendlist: params.friendId}}, {new: true})
    .populate({path: 'friendlist', select: ('-__v')})
    .select('-__v')
    .then(UserData => {
        if(!UserData) {
            res.json({message: "no user found"});
            return;
        }
        res.json(UserData)
    });
},


removeUser({params, body}, res) {
    User.findOneAndUpdate({_id: params.id}, body, {runValidators: true, new: true})
    .then(UserData => {
        if(!UserData){
            res.json({message: "no user found with entered id"});
            return;
        }
        res.json(UserData);
    })
},

UserbyId({params}, res) {
    User.findOne({_id: params.id})
    .populate({path: 'friends', select: '-__v'})
    .select('-__v')
    .then(UserData => {
        if(!UserData) {
            res.json({message: "no user found"});
            return;
        }
        res.json(UserData);
    })

}
}
module.exports = userController;
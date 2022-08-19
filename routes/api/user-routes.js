const router = require('express').Router();


const {
    addFriend,
    newUser,
    allUsers,
    UserbyId,
    removeUser,
} = require('../../controllers/users-controller')

router.route('/').get(allUsers).post(newUser);

router.route('/:id').get(UserbyId);

router.route('/:id/friends/:friendId').post(addFriend).delete(removeUser);
module.exports = router;
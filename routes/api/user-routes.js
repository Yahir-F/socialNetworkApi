const router = require('express').Router();


const {
    newUser,
    allUsers,
    UserbyId,
} = require('../../controllers/users-controller')

router.route('/').get(allUsers).post(newUser);
module.exports = router;
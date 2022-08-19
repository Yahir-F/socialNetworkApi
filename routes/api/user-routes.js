const router = require('express').Router();


const {
    newUser,
    allUsers,
    UserbyId,
} = require('../../controllers/users-controller')

router.route('/').get(allUsers).post(newUser);

router.route('/:id').get(UserbyId)
module.exports = router;
const router = require('express').Router();


const{
newThought

} = require('../../controllers/thoughts-controller')



router.route('/:userId').post(newThought);





module.exports = router;
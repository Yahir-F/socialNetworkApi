
const router = require ('express').Router();

const userRoute =  require('./user-routes');
const ThoughtRoute = require('./thoughts');

router.use('/users', userRoute);

router.use('/thoughts', ThoughtRoute);

module.exports = router;
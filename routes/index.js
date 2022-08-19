const router = require('express').Router();
const routeApi = require('./api')


router.use('/api', routeApi);


router.use((req, res) => {
res.status(404);
})

module.exports = router;
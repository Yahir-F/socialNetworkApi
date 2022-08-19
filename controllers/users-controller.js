const {Users} = require('../models');

const userController = {

newUser({body}, res) {
    Users.create(body)
}

}

module.exports = userController;
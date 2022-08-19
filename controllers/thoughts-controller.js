const {Thoughts, User} = require('../models');

const thoughtController = {

    newThought({params, body}, res){
        Thoughts.create(body)
        .then(({_id}) => {
            return User.findOneAndUpdate({_id: params.UserId}, {$push: {thoughts: _id}}, {new: true});
 
        })
    }
}
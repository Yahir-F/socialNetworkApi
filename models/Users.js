const { Schema, model } = require('mongoose');


const UsersSchema = new Schema(
{
 username: {
    type: String,
    required: true,
    unique: true
 },
 email: {
    type: String,
    unique: true,
    required: true,
 },
 thoughts: [{
    type: Schema.Types.ObjectId,
    ref: 'Thought'
 }],
 friends: [{
    type: Schema.Types.ObjectId,
    ref: "User"
 }]
},

)
const Users = model('Users', UsersSchema);

module.exports = Users;
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
    type: Types.ObjectId,
    ref: "User"
 }]
},

)

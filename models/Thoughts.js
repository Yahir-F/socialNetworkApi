const { Schema, model} = require('mongoose');

const ThoughtsSchema = new Schema(
    {

    thought: {
     type: String,
     minlength: 1,
     maxlength: 200,
    required: true,
    },
    Date: {

    },
    username: {
    type: String,
    required: true
    },
    },

    {
    toJSON: {
    virtuals: true,
    getters: true
    },
    id: false
    })
const Thoughts = model('Thoughts', ThoughtsSchema);


module.exports = Thoughts;
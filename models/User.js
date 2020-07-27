const mongoose = require('moongoose');
const { isNumber } = require('util');

const UserSchema = new mongoose.Schema({
    id:{
        type = Number
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type:String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required:true
    },
    avatar: {
        type:String
    },
    date: {
        type: Date
    }
})

module.exports = UserSchema;
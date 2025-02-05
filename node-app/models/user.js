const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName:{ type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type:String, required: true, },
    image: {type:String, required: true}
})

const User =  mongoose.model('User',UserSchema);
module.exports = User;
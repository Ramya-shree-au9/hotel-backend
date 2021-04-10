var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    hotelName: String,
    name: String,
    phone: String,
    status: String,
    date:String,
    accept:{
        type:String,
        default:'Accept'
    },
    reject:{
        type:String,
        default:'Reject'
    }
})

mongoose.model('hotelbookings',UserSchema)
module.exports = mongoose.model('hotelbookings')
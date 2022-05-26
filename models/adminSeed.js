const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({
    name: {
        type: String,
     },
    email: {
        type: String,
    },      
    password: {
        type: String,
    },
     status: {
        type: Boolean,
     },
})
module.exports = mongoose.model('Admin', adminSchema);
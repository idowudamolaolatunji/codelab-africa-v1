const mongoose = require('mongoose');

const contactUsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    }, 
    email: {
        type: String,
        lowercase: true,
        required: true,
        trim: true
    }, 
    subject: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        trim: true,
        required: true
    }
});

const Contact = mongoose.model('Contact', contactUsSchema);
module.exports = Contact;
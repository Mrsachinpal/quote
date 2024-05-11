const mongoose = require('mongoose');

let quoteSchema = new mongoose.Schema({
    author: {
        type: String,
        trim: true,
        required: true
    },
    quote: {
        type: String,
        trim: true,
        required: true
    },
    tag: {
        type: String,
        trim: true,
        required: true
    },
    topic: {
        type: String,
        trim: true,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        trim: true,
    },
    facebook:{
        type:String,
        trim:true,
    },
    instagram:{
        type:String,
        trim:true,
    },
    twitter:{
        type:String,
        trim:true,
    }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

const Quotes = mongoose.model('Quote', quoteSchema);
module.exports = Quotes;

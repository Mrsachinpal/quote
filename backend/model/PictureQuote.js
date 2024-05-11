const mongoose = require('mongoose');

let imagequoteSchema = new mongoose.Schema({
    author: {
        type: String,
        trim: true,
        required: true
    },
    quoteImage: {
        data: Buffer, // or you can use type: String if you store the image as base64 string
        contentType: String // specify the content type of the image
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

const ImageQuotes = mongoose.model('imageQuote', imagequoteSchema);
module.exports = ImageQuotes;

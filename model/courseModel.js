const mongoose = require('mongoose');


const courseSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    fee: {
        type: String,
        required: true,
        trim: true
    },
    duration: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true,
});


module.exports = mongoose.model("Course", courseSchema);
const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String },
    description: { type: String },
    year: { type: Number },
    pages: { type: Number },
    size: { type: String },
    format: { type: String, default: 'PDF' },
    pdfUrl: { type: String },   
    coverUrl: { type: String },
    isAudio: { type: Boolean, default: false }
},

{ timestamps: true });

module.exports = mongoose.model('Book', BookSchema);
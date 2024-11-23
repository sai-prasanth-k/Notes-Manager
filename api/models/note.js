const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, enum: ['WORK', 'PERSONAL', 'OTHERS'], default: 'OTHERS' },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Note', noteSchema);

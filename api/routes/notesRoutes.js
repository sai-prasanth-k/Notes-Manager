const express = require('express');
const router = express.Router();
const Note = require('../models/note');

// Create a new note
router.post('/notes', async (req, res) => {
    try {
        const {title, description, category} = req.body;
        const note = new Note({
            title: title,
            description: description,
            category: category
        });
        await note.save();
        res.status(201).send(note);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Get all notes with optional filters
router.get('/notes', async (req, res) => {
    try {
        const filters = {}; 
        if (req.query.title) filters.title = { $regex: req.query.title, $options: 'i' }; 
        if (req.query.category) filters.category = req.query.category
        const notes = await Note.find(filters).sort({ created_at: -1 });
        res.status(200).json(notes);
    } catch (error) {
        res.status(400).json(error.message);
    }
});

// Get a specific note by ID
router.get('/notes/:id', async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).send({ error: 'Note not found' });
        }
        res.status(200).send(note);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});


// Delete a specific note by ID
router.delete('/notes/:id', async (req, res) => {
    try {
        const note = await Note.findByIdAndDelete(req.params.id);
        if (!note) {
            return res.status(404).send({ error: 'Note not found' });
        }
        res.status(200).send({ message: 'Note deleted successfully' });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// Update a specific note by ID
router.put('/notes/:id', async (req, res) => {
    try {
        const note = await Note.findByIdAndUpdate(req.params.id, {
            ...req.body,
            updated_at: Date.now()
        }, { new: true });

        if (!note) {
            return res.status(404).send({ error: 'Note not found' });
        }
        res.status(200).send(note);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});


module.exports = router;

const mongoose = require('mongoose');

const archetypeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    data: JSON
});

module.exports = mongoose.model('Archetype', archetypeSchema);
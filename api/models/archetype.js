const mongoose = require('mongoose');

const archetypeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    meta: JSON,
    format: String,
    data: JSON
});

module.exports = mongoose.model('Archetype', archetypeSchema);
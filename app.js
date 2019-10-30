const express = require('express');
const app = express();

const archetypeRoutes = require('./api/routes/archetype');

app.use('/archetype', archetypeRoutes);

module.exports = app;
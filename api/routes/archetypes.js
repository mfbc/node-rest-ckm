const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Archetype = require('../models/archetype');

router.get('/', (req, res, next) =>{
    Archetype.find()
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                "error": err
            });
        });
});

router.get('/:id', (req, res, next) =>{
    const id = req.params.id;
    Archetype.findById(id)
        .exec()
        .then(doc => {
            console.log(doc);
            if (doc) {
                res.status(200).json(doc);
            } else {
                res.status(404).json({"message": "Id no encontrada"});
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({"error": err});
        });
});

router.post('/', (req, res, next) =>{
    const archetype = new Archetype({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        data: req.body.data
    });

    archetype
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                "success":true,
                "archetype": result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                "error": err
            })
        });
});

module.exports = router;
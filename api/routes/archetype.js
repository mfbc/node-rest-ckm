const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.status(200).json({
    "success":true,
    "data": {
        "code": "SUCCESS",
        "message": "Saludos a los k"
            }
    });
});

router.post('/', (req, res, next) =>{
    const arch = {
        name: req.body.name,
        data: req.body.data
    }
    res.status(201).json({
    "success":true,
    "data": {
        "code": "SUCCESS",
        "message": "mentira"
    },
    "archetype": arch
    });
});

module.exports = router;
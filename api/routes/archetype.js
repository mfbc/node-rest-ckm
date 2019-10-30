const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({
    "success":true,
    "data": {
        "code": "SUCCESS",
        "message": "Saludos a los k"
            }
    });
});

router.post('/', (req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({
    "success":true,
    "data": {
        "code": "SUCCESS",
        "message": "Los wa matar"
            }
    });
});

module.exports = router;
const express = require('express');
const router = express.Router();
const Record = require('../models/Records');

router.post('/', (req, res) => {
    const record = new Record({
        title: req.body.title,
        description: req.body.description,
    })
    record.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({ message: err })
        })
})

module.exports = router;
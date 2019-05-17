const express = require('express');
const router = express.Router();
const db = require('../config/database');
const user = require('../model/user');

router.get('/user', (req, res) => {
    user.findAll()
        .then(
            user => {
                console.log(user);
                res.sendStatus(200);
            }
        )
        .catch(err => console.log(`Error database find user: ${err}`))
});

module.exports = router;
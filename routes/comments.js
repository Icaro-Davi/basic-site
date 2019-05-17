const express = require('express');
const router = express.Router();

router.get('/comments/:postId', (req, res) => {
    res.json({
        content: 'this is my comment in my post',
        author: 'Hello Icaro'
    })
});

module.exports = router
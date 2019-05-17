const express = require('express');
const router = express.Router();

router.get('/userPosts', (req, res) => {
    res.json({
        title: 'Meu primeiro post',
        content: 'Era ali o cara o',
        author: 'Icaro'
    })
});

module.exports = router;
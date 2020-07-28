const express = require('express');
const router = express.Router();

// GET API/postss
router.get('/', (req,res) => {
    res.send('POSTs get testing')
})

module.exports = router;
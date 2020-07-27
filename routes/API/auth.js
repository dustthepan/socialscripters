const express = require('express');
const router = express.Router();


// GET API/Auth profile
router.get('/', (req,res) => {
    res.send('Auth get testing')
})

module.exports = router;
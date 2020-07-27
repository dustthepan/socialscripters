const express = require('express');
const router = express.Router();


// POST to api/users
router.post('/', (req,res) => 
    res.send('User testing'));

module.exports = router;


const express = require('express');
const router = express.Router();


// GET API/profile get
router.get('/', (req,res) => {
    res.send('Profile testing')
})

module.exports = router;

const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const gravatar = require('gravatar');
//const UserSchema = require('../../models/User');
const User = require('../../models/User');


// POST to api/users
router.post('/',
[
    check('name','Name is required').not().isEmpty(),
    check('email','Please include email').isEmail(),
    check('password','Please enter a password with 6 or more characters').isLength({min:6})
    
],
    async (req,res) => {

       // console.log(req.body)

    const errors = validationResult(req);
   
    if (!errors.isEmpty()) {
       
        return res.status(400).json({errors: errors.array()});
    }

    const {name,email,password} = req.body

    try {

        let user = await User.findOne({email});

        if (user) {
            res.status(400).json({errors: [{msg: 'user exists'}]})
            
        }
    res.status('User Route')
    } catch(err) {
        console.log(err.message);
    }

    User.create({
    name,
    email,
    password
})
    
});

module.exports = router;


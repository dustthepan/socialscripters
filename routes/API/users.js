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
    
], // edge cases 
    async (req,res) => {

       // console.log(req.body)

    const errors = validationResult(req);
   
    if (!errors.isEmpty()) {
       
        return res.status(400).json({errors: errors.array()});
    }

    const {name,email,password} = req.body

    try {
        // if user already exists 
        let user = await User.findOne({email});

        if (user) {
            res.status(400).json({errors: [{msg: 'user exists'}]})
            
        }

        //use gravatar package
        const avatar = gravatar.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm'

        })

        user = new User({
            name,
            email,
            avatar,
            password
        
        })

    res.send('User Route Pass')
    } catch(err) {
        console.log(err.message);
        res.status(500).send('Server error')
    }

    // payload
//     User.create({
//     name,
//     email,
//     password
// })


    
});

module.exports = router;


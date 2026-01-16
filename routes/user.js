const { Router } = require("express");
const {userMiddleware} = require("../middleware/user");
const {User,Todo} = require("../database/index")
const jwt = require('jsonwebtoken');
const jwt_secret = process.env.JWT_SECRET;

const router = Router();

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const email = req.body.email;
    const password = req.body.password;
    try{
        const existinguser = await User.findOne({email});
        if(existinguser){
            return res.status(409).json({message:"User already exists"});
        }
    
        await User.create({email:email,password:password});
        res.json({message:"Registered successfully"})
    }
    catch(err){
        res.status(500).json({message:"Signup failed"});
    }
});

router.post('/login', async (req, res) => {
     // Implement user login logic
     const email = req.body.email;
     const password = req.body.password;

    try{
        const user = await User.findOne({email,password})
   
        if(user){
           const token = jwt.sign({id:user._id.toString()},jwt_secret);
           res.json({token});
        }
        else{
           res.status(403).json({message:"Incorrect Credentials"});
        }
    }
    catch(err){
        res.status(500).json({message:"Login failed"});
    }
});

router.post('/logout', userMiddleware, (req, res) => {
    // Implement logout logic
    res.json({message:"logged out successfully"});
});

module.exports = router;
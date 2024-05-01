const express=require('express')
const router=express.Router()
const User=require('../models/User')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')


//REGISTER
router.post("/register",async(req,res)=>{
    try{
        const {username,email,password}=req.body
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hashSync(password,salt)
        const newUser=new User({username,email,password:hashedPassword})
        const savedUser=await newUser.save()
        res.status(200).json(savedUser)

    }
    catch(err){
        res.status(500).json(err)
    }
})

// LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json("User not found!");
        }
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) {
            return res.status(401).json("Wrong credentials!");
        }
        // If user is found and password is correct, generate JWT token
        const token = jwt.sign({ _id: user._id, username: user.username, email: user.email }, process.env.SECRET, { expiresIn: "3d" });
        // Exclude password from the response
        const { password, ...info } = user._doc;
        // Set the token in cookie and send user info in response
        res.cookie("token", token, { httpOnly: true }).status(200).json(info);
    } catch (err) {
        res.status(500).json(err);
    }
});




//LOGOUT
router.get("/logout",async (req,res)=>{
    try{
        res.clearCookie("token",{sameSite:"none",secure:true}).status(200).send("User Bye Bye :)")
    }
    catch(err){
        res.status(500).json(err)
    }
})

//RE-FETCH USER
router.get("/refetch", (req,res)=>{
    const token=req.cookies.token
    jwt.verify(token,process.env.SECRET,{},async (err,data)=>{
        if(err){
            return res.status(404).json(err)
        }
        res.status(200).json(data)
    })
})


module.exports=router
const User = require(`../models/user`);

const ErrorHandler = require(`../utils/errorHandler`);
const catchAsyncErrors = require(`../middleware/catchAsyncErrors`);
const sendToken = require("../utils/jwtToken");
const crypto = require(`crypto`);
const cloudinary = require(`cloudinary`);

//Register a user => /api/v1/register
exports.registerUser = catchAsyncErrors(async (req,res,next) => {
   
    const result = await cloudinary.v2.uploader.upload(req.body.avatar,{
        folder: 'avatar',
        width: 50,
        crop: "scale"
    })

    const {name,email, password} = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: result.public_id,
            url: result.secure_url
        }
    })

   sendToken(user, 200, res)
})

//Login User => /a[i/v1/login]

exports.loginUser = catchAsyncErrors(async(req,res,next) => {
    const {email,password} = req.body;

    //Check if email and password is entered by user
    if(!email || !password){
        return next(new ErrorHandler(`Please enter email & password`, 400))
    }

    //Finding user in database
    const user = await User.findOne({email }).select(`+password`)
    if(!user){
        return next(new ErrorHandler(`Invalid Email or Password`, 401));
    }

    //Check if password is correct or not
    const isPasswordMatched = await user.comparePassword(password);

    if(!isPasswordMatched){
        return next(new ErrorHandler(`Invalid Email or Password`, 401));
    }

    sendToken(user, 200, res)
})



//Logout user => /api/v1/logout
exports.logout = catchAsyncErrors( async (req,res,next) => {
    res.cookie(`token`, null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: `Logged Out`
    })
})


// Get currently logged in user details => /api/v1/me
exports.getUserProfile = catchAsyncErrors(async (req,res,next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user
    })
})






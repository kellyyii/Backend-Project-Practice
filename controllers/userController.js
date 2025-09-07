const asyncHandler = require("express-async-handler");


//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "register the user" });
});

//@desc login the user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "login user" });
});

//@desc get currentuser info
//@route POST /api/users/current
//@access public
const currentUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Current user INFO" });
});



module.exports = {
    registerUser,
    loginUser,
    currentUser,
};
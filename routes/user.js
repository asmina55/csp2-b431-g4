// [SECTION] Dependencies and Modules
const express = require("express");
const userController = require("../controllers/user");
const auth = require("../auth");

const {verify, isLoggedIn } = auth;

// [SECTION] Routing Component
const router = express.Router();

// [SECTION] Route for user registration
router.post("/register", userController.registerUser);

// [SECTION] Route for user authentication
router.post("/login", userController.loginUser)

// Retrieve user details
router.get("/details", verify, userController.getProfile);

// PATCH route for updating the password
router.patch('/update-password', verify, userController.updatePassword);


// Update user to admin 
router.patch('/:id/set-as-admin', verify, userController.setUserAsAdmin);


// [SECTION] Export Route System
module.exports = router;
require('dotenv').config();
const User = require("../models/user");
const bcrypt = require("bcrypt"); 
const jwt = require("jsonwebtoken");


const login = async (req, res) => {
const { email, password } = req.body;


  try {
    const user = await User.findOne({ email }); 
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h"
      });

      return res.json({ message: "Login successful", token });
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }

  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};


const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already registered" });
    }

    const bcryptPassword = await bcrypt.hash(password, 12);

    const newUser = new User({ name, email, password: bcryptPassword });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h"
    });

    return res.json({ message: "Signup successful", token });

  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err.message });
  }
};


module.exports = { login, signup }; 

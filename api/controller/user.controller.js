const User = require("../model/User");

// const createEmail = async (res, req) => {
//   try {
//     const user = await User.create(req.body);
//     res.status(201).json(user);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

const createEmail = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }
  try {
    // Create a new user with the provided email
    const newUser = await User.create({ email });
    res
      .status(201)
      .json({ message: "Email created successfully", email: newUser.email });
  } catch (error) {
    if (error.code === 11000) {
      // Handle duplicates
      res.status(400).json({ message: "Email already exists" });
    } else {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  }
};

const getEmails = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createEmail, getEmails };

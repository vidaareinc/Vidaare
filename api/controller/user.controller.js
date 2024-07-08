const User = require("../model/User.js");

const createEmail = async (res, req) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEmails = async (res, req) => {
  try {
    const user = await User.find({});
    res.status(200).json(user);
  } catch (err
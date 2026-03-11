const User = require("../models/user-model");
const Contact = require("../models/constact-model");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    if (!users || users.lenght === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

//Edit single user data
const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }, { password: 0 });
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

//User update
const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUserData = req.body;

    const updatedData = await User.updateOne(
      { _id: id },
      { $set: updatedUserData },
    );
    return res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
  }
};

//Delete Users
const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    console.log(error);
  }
};

//Get all Login contacts
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "No contacts available" });
    }
    res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

//Delete Contacts
const deleteContactById = async (req, res) => {
  try {
    const id = req.params.id;
    await Contact.deleteOne({ _id: id });
    return res.status(200).json({ message: "Contacts Deleted Successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUsers,
  getAllContacts,
  deleteUserById,
  deleteContactById,
  getUserById,
  updateUserById,
};

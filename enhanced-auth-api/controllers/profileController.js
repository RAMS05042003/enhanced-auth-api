// backend/controllers/profileController.js
const User = require('../models/User');

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    if (!user.isPublic && req.user && req.user.id !== user.id && !req.user.isAdmin) {
      return res.status(403).json({ error: 'Access denied' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.editUserProfile = async (req, res) => {
  try {
    // Implement logic to edit user profile
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.listPublicProfiles = async (req, res) => {
  try {
    const publicProfiles = await User.find({ isPublic: true });
    res.json(publicProfiles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.retrieveUserProfiles = async (req, res) => {
  try {
    const profiles = await User.find();
    res.json(profiles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

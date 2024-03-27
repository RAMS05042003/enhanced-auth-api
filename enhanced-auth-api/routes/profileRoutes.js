// backend/routes/profileRoutes.js
const express = require('express');
const router = express.Router();
const { getUserProfile, editUserProfile, listPublicProfiles, retrieveUserProfiles } = require('../controllers/profileController');
const isAdmin = require('../middleware/isAdmin');

router.get('/', isAdmin, retrieveUserProfiles);
router.get('/public', listPublicProfiles);
router.get('/:id', getUserProfile);
router.put('/', editUserProfile);

module.exports = router;

const express = require('express');
const router = express.Router();
const path = require('path');

// Serve all static files from public folder
router.use(express.static(path.join(__dirname, '..', 'public')));

// Optional: explicit paths (fixed)
// These are not strictly needed, but if you want them:
router.use('/css', express.static(path.join(__dirname, '..', 'public', 'css')));
router.use('/js', express.static(path.join(__dirname, '..', 'public', 'js')));
router.use('/images', express.static(path.join(__dirname, '..', 'public', 'images')));

module.exports = router;





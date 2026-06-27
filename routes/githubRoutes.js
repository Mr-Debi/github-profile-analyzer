const express = require("express");
const router = express.Router();

const {
    analyzeProfile,
    getProfiles,
    getProfile,
    removeProfile
} = require("../controllers/githubController");

router.get("/", (req, res) => {
    res.json({
        success: true,
        message: "GitHub Profile Analyzer API is Running"
    });
});

router.get("/analyze/:username", analyzeProfile);
router.get("/profiles", getProfiles);
router.get("/profile/:username", getProfile);

// DELETE route
router.delete("/profile/:username", removeProfile);

module.exports = router;
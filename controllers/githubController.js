const { fetchGitHubProfile } = require("../services/githubService");

const {
    saveProfile,
    getAllProfiles,
    getProfileByUsername,
    deleteProfile
} = require("../models/profileModel");

// Fetch GitHub profile and save to MySQL
const analyzeProfile = async (req, res) => {
    try {

        console.log("Analyze endpoint called");

        const username = req.params.username;

        const profile = await fetchGitHubProfile(username);

        console.log("GitHub profile fetched");

        await saveProfile(profile);

        console.log("Profile saved to DB");

        res.json({
            success: true,
            message: "Profile analyzed and saved successfully",
            data: profile
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Get all stored profiles
const getProfiles = async (req, res) => {
    try {
        const profiles = await getAllProfiles();

        res.status(200).json({
            success: true,
            count: profiles.length,
            data: profiles
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get one stored profile
const getProfile = async (req, res) => {
    try {
        const username = req.params.username;

        const profile = await getProfileByUsername(username);

        if (!profile) {
            return res.status(404).json({
                success: false,
                message: "Profile not found"
            });
        }

        res.status(200).json({
            success: true,
            data: profile
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Remove Profile
const removeProfile = async (req, res) => {
    try {
        const username = req.params.username;

        const result = await deleteProfile(username);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: "Profile not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Profile deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    analyzeProfile,
    getProfiles,
    getProfile,
    removeProfile
};
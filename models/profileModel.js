const db = require("../config/db");

// Format GitHub ISO date to MySQL DATETIME
const formatDate = (date) => {
    return new Date(date)
        .toISOString()
        .slice(0, 19)
        .replace("T", " ");
};

// Save or Update GitHub Profile
const saveProfile = (profile) => {
    return new Promise((resolve, reject) => {

        const query = `
            INSERT INTO github_profiles (
                username,
                name,
                bio,
                company,
                location,
                public_repos,
                followers,
                following,
                public_gists,
                avatar_url,
                profile_url,
                created_at_github,
                updated_at_github
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)

            ON DUPLICATE KEY UPDATE
                name = VALUES(name),
                bio = VALUES(bio),
                company = VALUES(company),
                location = VALUES(location),
                public_repos = VALUES(public_repos),
                followers = VALUES(followers),
                following = VALUES(following),
                public_gists = VALUES(public_gists),
                avatar_url = VALUES(avatar_url),
                profile_url = VALUES(profile_url),
                created_at_github = VALUES(created_at_github),
                updated_at_github = VALUES(updated_at_github),
                analyzed_at = CURRENT_TIMESTAMP;
        `;

        db.query(
            query,
            [
                profile.login,
                profile.name,
                profile.bio,
                profile.company,
                profile.location,
                profile.public_repos,
                profile.followers,
                profile.following,
                profile.public_gists,
                profile.avatar_url,
                profile.html_url,
                formatDate(profile.created_at),
                formatDate(profile.updated_at)
            ],
            (err, result) => {
                if (err) return reject(err);
                resolve(result);
            }
        );
    });
};

// Get all stored profiles
const getAllProfiles = () => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM github_profiles ORDER BY analyzed_at DESC";

        db.query(query, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};

// Get profile by username
const getProfileByUsername = (username) => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM github_profiles WHERE username = ?";

        db.query(query, [username], (err, results) => {
            if (err) return reject(err);
            resolve(results[0]);
        });
    });
};

// Delete profile by username
const deleteProfile = (username) => {
    return new Promise((resolve, reject) => {
        db.query(
            "DELETE FROM github_profiles WHERE username = ?",
            [username],
            (err, result) => {
                if (err) return reject(err);
                resolve(result);
            }
        );
    });
};

module.exports = {
    saveProfile,
    getAllProfiles,
    getProfileByUsername,
    deleteProfile
};
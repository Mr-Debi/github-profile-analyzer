const axios = require("axios");

const fetchGitHubProfile = async (username) => {
    try {
        console.log("Fetching GitHub profile:", username);

        const response = await axios.get(
            `https://api.github.com/users/${username}`
        );

        return response.data;

    } catch (error) {
        console.error("GitHub API Error:", error.response?.data || error.message);
        throw new Error("GitHub user not found");
    }
};

module.exports = {
    fetchGitHubProfile
};
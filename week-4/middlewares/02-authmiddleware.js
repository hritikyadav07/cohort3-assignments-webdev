const express = require('express');
const app = express();
const VALID_API_KEY = '100xdevs_cohort3_super_secret_valid_api_key'; // Key to authenticate the user

// Middleware to check for a valid API key
function authenticateAPIKey(req, res, next) {
    // Retrieve the API key from the request headers
    const apiKey = req.headers['100xdevs-api-key'];

    if (apiKey === VALID_API_KEY) {
        next(); // Proceed to the next middleware or route handler
    } else {
        res.status(401).json({ message: 'Invalid or missing API key' });
    }
}

app.use(authenticateAPIKey);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Access granted' });
});

module.exports = app;

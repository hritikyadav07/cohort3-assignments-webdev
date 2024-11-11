//  Create a middleware that logs all incoming requests to the console.

const express = require('express');
const app = express();

function logRequests(req, res, next) {
    // write the logic for request log here
    const timestamp = new Date().toISOString();
    console.log(`${req.method} ${req.url} - ${timestamp}`);
    next(); // Call the next middleware in the stack or the route handler.
}

app.use(logRequests);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello, world!' });
});

module.exports = app;


const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    console.log("Incoming request:", req.method, req.url);
    next();
});

// Test route
app.get("/", (req, res) => {
    res.send("Bismillah Burger House Backend is running!");
});

// Franchise enquiry route
app.post("/api/franchise", (req, res) => {
    const {
        name,
        mobile,
        city,
        state,
        country
    } = req.body;

    if (!name || !mobile || !city || !state || !country) {
        return res.status(400).json({
            success: false,
            message: "Please fill in all required fields."
        });
    }

    console.log("New Franchise Enquiry:");
    console.log({
        name,
        mobile,
        city,
        state,
        country
    });

    res.status(200).json({
        success: true,
        message: "Franchise enquiry received successfully!"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`BBH Backend running at http://localhost:${PORT}`);
});

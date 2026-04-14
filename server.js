const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();

// static files serve karega
app.use(express.static('public'));

// API route
app.get('/weather', async (req, res) => {
    const city = req.query.city;
    const apiKey = process.env.API_KEY;

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );

        const data = await response.json();

        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Something went wrong" });
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
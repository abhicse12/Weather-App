const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();
const app = express();

app.use(express.static('public'));

const API_KEY = process.env.API_KEY;

app.get('/weather', async (req, res) => {
    const city = req.query.city;

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );

        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching weather data' });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
require('dotenv').config();

async function getWeather() {
    const city = document.getElementById('location').value;
    const apiKey = process.env.API_KEY;

    
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`);
    const weatherData = await weatherResponse.json();

    if (weatherResponse.ok) {
        
        document.getElementById('weatherResult').innerHTML = `
            <h3>Weather in ${weatherData.name}</h3>
            <p>Temperature: ${weatherData.main.temp}°C</p>
            <p>Weather: ${weatherData.weather[0].description}</p>
        `;
    } else {
        document.getElementById('weatherResult').innerHTML = 'Location not found. Please try again.';
    }
}


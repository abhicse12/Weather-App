require('dotenv').config();

async function getWeather() {
    const city = document.getElementById('location').value;
    const apiKey = '29d172441f147b207d372f66f7adb985'; // अपनी API Key यहाँ डालें

    // OpenWeatherMap API कॉल
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`);
    const weatherData = await weatherResponse.json();

    if (weatherResponse.ok) {
        // वेदर जानकारी को डिस्प्ले करें
        document.getElementById('weatherResult').innerHTML = `
            <h3>Weather in ${weatherData.name}</h3>
            <p>Temperature: ${weatherData.main.temp}°C</p>
            <p>Weather: ${weatherData.weather[0].description}</p>
        `;
    } else {
        document.getElementById('weatherResult').innerHTML = 'Location not found. Please try again.';
    }
}

async function getWeather() {
    const city = document.getElementById('location').value;

    // Backend se API call (IMPORTANT for deployed app)
    const response = await fetch(`/weather?city=${city}`);
    const data = await response.json();

    if (data.cod === 200) {

        const icon = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

        document.getElementById('weatherResult').innerHTML = `
            <h3>Weather in ${data.name}, ${data.sys.country}</h3>

            <img src="${iconUrl}" alt="weather icon">

            <p>🌡 Temperature: ${data.main.temp}°C</p>
            <p>🤒 Feels Like: ${data.main.feels_like}°C</p>
            <p>☁ Weather: ${data.weather[0].description}</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>🌬 Wind Speed: ${data.wind.speed} m/s</p>
            <p>🔽 Min: ${data.main.temp_min}°C | 🔼 Max: ${data.main.temp_max}°C</p>
        `;
    } else {
        document.getElementById('weatherResult').innerHTML =
            '❌ Location not found. Try again.';
    }
}
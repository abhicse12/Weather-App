async function getWeather() {
    const city = document.getElementById('location').value;

    const response = await fetch(`/weather?city=${encodeURIComponent(city)}`);
    const data = await response.json();

    if (response.ok) {
        document.getElementById('weatherResult').innerHTML = `
            <h3>Weather in ${data.name}</h3>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    } else {
        document.getElementById('weatherResult').innerHTML = 'Location not found';
    }
}
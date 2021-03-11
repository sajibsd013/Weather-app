const apiKey = 'b6cc4392568a3586e950307c86a22bbd';
const apiBase = 'https://api.openweathermap.org/data/2.5/weather';

const getWeatherData = city => {

    const url = `${apiBase}?q=${city}&units=metric&appid=${apiKey}`;
    fetch(url)
        .then (res => res.json())
        .then (data => updateUI(data))

}




document.getElementById('search-button').addEventListener('click', () => {

    const city = document.getElementById('location').value;

})


const updateUI = data => {
    document.getElementById('show-city').innerText = data.name|| 'Unknown Location';
    document.getElementById('show_temperature').innerText = data.main.temp;
    document.getElementById('weather_status').innerText = data.weather[0].main;
    document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);

    document.getElementById('location').value = "";
}
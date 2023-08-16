console.log('loading...');


const API_KEY = '4151c20b5cfa1f51fccb8cd8e91d56da';

const getLocation = async (cityName, state, country) => {
    const URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${state},${country}&limit=1&appid=${API_KEY}`
    const res = await fetch(URL);
    console.log(`result from getLocation: ${res}`);
    return [res[0].lat, res[0].lon];
}

const getWeather = async (cityName, state, country) => {
    const latlon = await getLocation(cityName, state, country);
    const lat = latlon[0], lon = latlon[1];
    const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    const res = await fetch(URL);
    console.log(`result from getWeather: ${res}`);
}

const reportWeather = (weather) => {
    const box = document.getElementById('box')
}


document.getElementById('submitbtn').onclick = async () => { 
    console.log('submitting')
    await getWeather(); 
}

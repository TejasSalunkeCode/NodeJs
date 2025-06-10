import readline from 'readline/promises'
import { error } from 'console';
import { response } from 'express';

const API_KEY = '68858763ffc0a04c9fde48c5d56bc79b';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const getweather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new error('City not found. Please check the city name');
        }
        const weathedata = await response.json();
        console.log(weathedata);
        
        console.log("\n Weather Information : ");
        console.log(`City : ${weathedata.name}`);
        console.log(`Tempratue : ${weathedata.main.temp} C`);
        console.log(`Description : ${weathedata.weather[0].description}`);
        console.log(`Humidity : ${weathedata.main.humidity}`);
        console.log(`Wind Speed : ${weathedata.wind.speed}`);
    } catch (error) {
        console.log(error);
    }
}

const city = await rl.question("Enter a City name to get its weather : ");
await getweather(city);
rl.close();
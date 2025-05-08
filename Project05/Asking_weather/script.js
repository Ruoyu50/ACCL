

// document.addEventListener('DOMContentLoaded', fetchArtData);

// async function fetchArtData() {
    
//     try {
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=40.7128&lon=-74.0060&units=metric&appid=bc0dffe988a5874f093f027fbf71411f`)

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         showData(data);
        
//     }
//     catch(error){
//         console.error('Fetch error:', error);
//     };
// };

// function showData(data){
//     console.log(data);
//     console.log(data.weather[0].description);
//     //Create your front end here

//     //convert temp from celcius to farenheit
//     let temp_cel = data.main.temp;
//     let temp_fah = (temp_cel * 9/5) + 32;

//     //get the weather description and location
//     let weather_desc = data.weather[0].description;
//     let location = data.name;

//     //get element in html and append data
//     const weatherSection = document.getElementById('weatherSection');
//     const weatherItem = document.createElement('div');

//     weatherItem.innerHTML = `
//         <hr>
//         <ul>
//         <li>The location is ${location}</li>
//         <li>The forecast is ${weather_desc}</li>
//         <li>The temperature in farenheit is ${temp_fah.toFixed(2)} degrees</li>
//         <ul>
//         <p> </p>
//     `;

//     weatherSection.appendChild(weatherItem);

// }













// const apiKey = 'bc0dffe988a5874f093f027fbf71411f';
// const cityForm = document.getElementById('cityForm');
// const tempForm = document.getElementById('tempForm');
// const cities = ['New York', 'London', 'Beijing', 'Tokyo', 'Moscow', 'Sydney', 'Cairo']

// cityForm.addEventListener('submit', async function(e) {
//   e.preventDefault();
//   const city = document.getElementById('customCitiesInput').value;
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
//   try {
//     const res = await fetch(url);
//     const data = await res.json();
//     const tempF = (data.main.temp * 9/5) + 32;
//     const weather = data.weather[0].description;
//     document.getElementById('cityResult').innerText = 
//       `${city} is ${tempF.toFixed(1)}°F, and ${weather}.`;
//   } catch (err) {
//     document.getElementById('cityResult').innerText = 'City not found.';
//   }
// });

// tempForm.addEventListener('submit', async function(e) {
//   e.preventDefault();
//   const tempInput = parseFloat(document.getElementById('tempInput').value);
  
//   const rawInput = document.getElementById('customCitiesInput').value;
// const cities = rawInput.split(',').map(c => c.trim()).filter(c => c); // 去除空项和多余空格

//   const matchingCities = [];

//   for (let city of cities) {
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
//     const res = await fetch(url);
//     const data = await res.json();
//     const tempF = (data.main.temp * 9/5) + 32;
    
//     if (Math.abs(tempF - tempInput) < 1.5) { //允许 ±1.5°F 的浮动匹配
//       matchingCities.push(city);
//     }
//   }

//   if (matchingCities.length > 0) {
//     const shownCities = matchingCities.slice(0, 3);
//     document.getElementById('tempResult').innerText = 
//       `${shownCities.join(', ')} ${shownCities.length === 1 ? 'is' : 'are'} ${tempInput}°F today.` +
//       (matchingCities.length > 3 ? ` (Showing 3 of ${matchingCities.length} matches)` : '');
//   } else {
//     document.getElementById('tempResult').innerText = 'No cities match that temperature today.';
//   }
// });








const apiKey = 'bc0dffe988a5874f093f027fbf71411f';
const cityForm = document.getElementById('cityForm');
const tempForm = document.getElementById('tempForm');

// 中国34个主要城市
const cities = [
  'Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Chengdu', 'Chongqing',
  'Tianjin', 'Hangzhou', 'Nanjing', 'Wuhan', 'Xi\'an', 'Suzhou', 'Qingdao',
  'Dalian', 'Zhengzhou', 'Shenyang', 'Jinan', 'Changsha', 'Fuzhou', 'Xiamen',
  'Harbin', 'Nanning', 'Kunming', 'Hefei', 'Taiyuan', 'Nanchang', 'Guiyang',
  'Lanzhou', 'Hohhot', 'Urumqi', 'Yinchuan', 'Haikou', 'Lhasa', 'Macau'
];

cityForm.addEventListener('submit', async function(e) {
  e.preventDefault();
  const city = document.getElementById('customCitiesInput').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
  try {
    const res = await fetch(url);
    const data = await res.json();
    const tempF = (data.main.temp * 9/5) + 32;
    const weather = data.weather[0].description;
    document.getElementById('cityResult').innerText = 
      `${city} is ${tempF.toFixed(1)}°F, and ${weather}.`;
  } catch (err) {
    document.getElementById('cityResult').innerText = 'City not found.';
  }
});

tempForm.addEventListener('submit', async function(e) {
  e.preventDefault();
  const tempInput = parseFloat(document.getElementById('tempInput').value);
  const matchingCities = [];

  for (let city of cities) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      const tempF = (data.main.temp * 9/5) + 32;

      if (Math.abs(tempF - tempInput) < 1.5) {
        matchingCities.push(city);
      }
    } catch (err) {
      console.warn(`Failed to fetch ${city}:`, err);
    }
  }

  if (matchingCities.length > 0) {
    const shownCities = matchingCities.slice(0, 3);
    document.getElementById('tempResult').innerText = 
      `${shownCities.join(', ')} ${shownCities.length === 1 ? 'is' : 'are'} around ${tempInput}°F today.` +
      (matchingCities.length > 3 ? ` (Showing 3 of ${matchingCities.length} matches)` : '');
  } else {
    document.getElementById('tempResult').innerText = 'No cities match that temperature today.';
  }
});

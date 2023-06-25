const inpCity = document.getElementById("city-name");
const searchBtn = document.getElementById("search-btn");
const cityDisp = document.getElementById("city-disp");
const details = document.getElementById("details");

searchBtn.addEventListener("click", () => {
  console.log(inpCity.value);
  cityDisp.innerText = inpCity.value.toUpperCase();

  const weatherDetails = getWeather(inpCity.value.toLowerCase());
  console.log(`Weather details are ${weatherDetails}`);

  weatherDetails.then((data) => {
    console.log(`weatherDetails are ${data}`);
    console.log(` in weatherDetails The weater is ${data.weather[0].main}`);
    console.log(`in weatherDetails The min temp is ${data.main.temp_min}`);
    console.log(`in weatherDetails The max temp is ${data.main.temp_max}`);

    details.innerHTML = `
  <h1> ${data.weather[0].main} </h1>
  <p> Temp : ${data.main.temp}&deg;F</p>
  <p> Min-Temp : ${data.main.temp_min}&deg;F</p>
  <p> Max-Temp : ${data.main.temp_max}&deg;F</p>
  `;
  });
});

let getWeather = async (city) => {
  const url = `https://openweather43.p.rapidapi.com/weather?q=${city}&units=imperial`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "bfc91aac11msh01fe4ed4aee1c7ep11e238jsn269d50654558",
      "X-RapidAPI-Host": "openweather43.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    // console.log(`The weater is ${result.weather[0].main}`);
    // console.log(`The min temp is ${result.main.temp_min}`);
    // console.log(`The max temp is ${result.main.temp_max}`);
    return result;
  } catch (error) {
    console.error(`Error while fetching data ${error}`);
  }
};

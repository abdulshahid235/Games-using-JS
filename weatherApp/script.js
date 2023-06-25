let getWeather = async () => {
  let city = "las vegas";
  const url = `https://openweather43.p.rapidapi.com/weather?q=${city}&units=standard`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "bfc91aac11msh01fe4ed4aee1c7ep11e238jsn269d50654558",
      "X-RapidAPI-Host": "openweather43.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

getWeather();

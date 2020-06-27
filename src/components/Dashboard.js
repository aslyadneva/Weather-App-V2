import React, { useState, useRef, useEffect } from "react";
import Screen from "./Screen";
import Details from "./Details";
import sunnySky from "../assets/sunny-sky.jpg";
import defaultSky from "../assets/default-sky.jpg";
import clearNightSky from "../assets/clear-night-sky.jpg";
import moment from "moment";

// const unsplashID = "d0Jrqc3doUfP5BMaMrQLX9v_mnei9NU3c0hsoT_h6Bc";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [background, setBackground] = useState(defaultSky);
  const dashboard = useRef();

  const getWeather = (city) => {
    fetch(
      `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2d9462e18d3d1e92d73d2b88421d2993&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData({
          city: data.name,
          country: data.sys.country,
          temp: data.main.temp,
          weather: data.weather[0].description,
          localSunriseTime: data.sys.sunrise + data.timezone, // unix UTC time in SECONDS
          localSunsetTime: data.sys.sunset + data.timezone, // unix UTC time in SECONDS
          localTime: Date.now() / 1000 + data.timezone, // local time in UNIX SECONDS ex: 1593218960.678
        });
      });
  };

  useEffect(() => {
    const rootEl = dashboard.current.parentElement;

    // set background color of root element
    if (data) {
      const { localSunriseTime, localSunsetTime, localTime } = data;
      if (localTime > localSunsetTime) {
        rootEl.style.backgroundColor = "#1f1f1f";
        setBackground(clearNightSky);
      } else if (localTime > localSunriseTime && localTime < localSunsetTime) {
        rootEl.style.backgroundColor = "#e4eaf2";
        setBackground(sunnySky);
      }
    }
  }, [data]);

  return (
    <div className="Dashboard" ref={dashboard}>
      <img src={background} className="Dashboard__image" alt="Sunny sky" />
      <Details data={data} getWeather={getWeather} />
      <Screen data={data} />
    </div>
  );
};

export default Dashboard;

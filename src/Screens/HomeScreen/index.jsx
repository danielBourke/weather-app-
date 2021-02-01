import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import Header from "./Header/index";
import { distanceCheck } from "App/Utils/index";
import Topbar from "./Topbar";

const HomeScreen = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState([]);
  const [selectedWeather, setSelectedWeather] = useState();

  const fetchWeatherInfo = useCallback(async () => {
    try {
      const locations = await axios.get("http://localhost:3030/weather");
      setWeather(locations.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const fetchLocations = useCallback(async () => {
    setLoading(true);
    try {
      const locations = await axios.get("http://localhost:3030/locations");
      setLocations(locations.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(function () {
      fetchWeatherInfo();
      fetchLocations();
      setLoading(false);
    }, 3000);
  }, [fetchWeatherInfo,fetchLocations ]);

  const handleLocationChange = (event, newValue) => {
    
    if(newValue !== null){
    weather.forEach((item) => {
      const selectedLocation = {
        lat: newValue.latitude,
        lon: newValue.longitude,
      };
      const weatherLocation = {
        lat: item.coord.lat,
        lon: item.coord.lon,
      };
      const check = distanceCheck(selectedLocation, weatherLocation, 100);
      if (check === true) {
        setSelectedWeather(item);
      }
    });}
  };

  return (
    <>
      <Topbar
        loading={loading}
        locations={locations}
        handleLocationChange={handleLocationChange}
      />
      <Header selectedWeather={selectedWeather} />
    </>
  );
};

export default HomeScreen;

import React, { useState } from "react";
import {
  HeaderInfoSection,
  HeaderItemWrapper,
  TempContainer,
  TempToggle,
  Tempselector,
} from "./Styled";
import {
  formatTime,
  convertKelvinToCeluis,
  convertKelvinToFahrenheit,
  getVisability,
  cloudCoverage
} from "App/Utils";
import { Divider } from "@material-ui/core";
import wind_icon from "App/assets/wind_icon.png";

const HeaderContent = ({ selectedWeather }) => {
  const [convertTemp, SetConvertTemp] = useState(false);

  if (!selectedWeather) {
    return (
      <HeaderItemWrapper>
        <HeaderInfoSection>
          <h1>Enter postcode in search box to find out the weather in your area.</h1>
        </HeaderInfoSection>
      </HeaderItemWrapper>
    );
  }
  return (
    <>
      <HeaderItemWrapper>
        <HeaderInfoSection>
          <h1>{selectedWeather && selectedWeather.name}</h1>
          <h2>
            Sunrise:{" "}
            {selectedWeather &&
              `
                ${formatTime(selectedWeather.sys.sunrise)}`}
          </h2>
          <h2>
            Sunset:{" "}
            {selectedWeather && `${formatTime(selectedWeather.sys.sunset)}`}
          </h2>
          <TempContainer>
            <img
              alt=""
              src={`http://openweathermap.org/img/wn/${
                selectedWeather && selectedWeather.weather[0].icon
              }@2x.png`}
            />
            <div style={{ marginRight: 10, width: 50 }}>
              <h2>
                {" "}
                {convertTemp
                  ? convertKelvinToFahrenheit(selectedWeather.main.temp)
                  : convertKelvinToCeluis(selectedWeather.main.temp)}
                  {convertTemp ?  <span>&#8457;</span> : <span>&#8451;</span> }
              </h2> 
            </div>
            <TempToggle>
              <Tempselector
                onClick={() => SetConvertTemp(false)}
                style={{
                  color: convertTemp ? "grey" : "#404040",
                }}
              >
                &#8451;
              </Tempselector>
              <Divider orientation="vertical" flexItem />
              <Tempselector
                onClick={() => SetConvertTemp(true)}
                style={{
                  color: convertTemp ? "#404040" : "grey",
                }}
              >
                &#8457;
              </Tempselector>
            </TempToggle>
          </TempContainer>
          <h2>
            The max temperature:{" "}
            {convertTemp
              ? convertKelvinToFahrenheit(selectedWeather.main.temp_max)
              : convertKelvinToCeluis(selectedWeather.main.temp_max)}{" "}
            {convertTemp ? <span> &#8457;</span> : <span>&#8451;</span>}
          </h2>

          <h2>
            Min temperature:
            {convertTemp
              ? convertKelvinToFahrenheit(selectedWeather.main.temp_min)
              : convertKelvinToCeluis(selectedWeather.main.temp_min)}{" "}
            {convertTemp ? <span> &#8457;</span> : <span>&#8451;</span>}
          </h2>
        </HeaderInfoSection>
      </HeaderItemWrapper>
      <HeaderItemWrapper>
        <HeaderInfoSection>
          <h2>
            visibility:{" "}
            {selectedWeather && getVisability(selectedWeather.visibility)}
          </h2>

          <div
            style={{
              backgroundImage: `url(${wind_icon})`,
              width: 100,
              height: 100,
              position: "relative",
              backgroundSize: "cover",
              transform: `rotate(${selectedWeather.wind.deg}deg)`,
            }}
          >
            <div
              style={{
                position: "absolute",
                width: 100,
                height: 100,
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                transform: `rotate(${360 - selectedWeather.wind.deg}deg)`,
              }}
            >
              <h2 style={{ margin: "auto" }}>
                {" "}
                {selectedWeather && selectedWeather.wind.speed.toFixed(1)}
              </h2>
            </div>
          </div>

          <h2>{selectedWeather && cloudCoverage(selectedWeather.clouds.all)}</h2>
        </HeaderInfoSection>
      </HeaderItemWrapper>
    </>
  );
};

export default HeaderContent;

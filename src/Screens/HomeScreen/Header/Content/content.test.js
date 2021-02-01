import React from "react";
import { shallow, mount } from "enzyme";
import HeaderContent from "./index";
const title = "Enter postcode in search box to find out weather";

const placeTitleWithData = "Manchester";
let wrapped = shallow(<HeaderContent />);
describe("Should render default message", () => {

  it("should render default message correctly", () => {
    expect(wrapped.find("h1").text()).toEqual(title);
  });
});

const mockdata = {
  id: 2643123,
  coord: { lon: -2.28, lat: 53.48 },
  weather: [{ id: 500, main: "Rain", description: "light rain", icon: "10n" }],
  base: "stations",
  main: {
    temp: 285.76,
    feels_like: 284.05,
    temp_min: 285.15,
    temp_max: 285.93,
    pressure: 1012,
    humidity: 100,
  },
  visibility: 10000,
  wind: { speed: 3.6, deg: 270 },
  clouds: { all: 90 },
  dt: 1604060843,
  sys: {
    type: 1,
    id: 1379,
    country: "GB",
    sunrise: 1604041483,
    sunset: 1604076019,
  },
  timezone: 0,
  name: "Manchester",
};
let wrappedWithData = mount(<HeaderContent selectedWeather={mockdata} />);

describe("Title", () => {
  it("renders props correctly", () => {
    expect(wrappedWithData.find("h1").text()).toEqual(placeTitleWithData);
  });
});


export function distanceCheck(checkPoint, centerPoint, km) {
  const ky = 40000 / 360;
  const kx = Math.cos((Math.PI * centerPoint.lat) / 180.0) * ky;
  const dx = Math.abs(centerPoint.lon - checkPoint.lon) * kx;
  const dy = Math.abs(centerPoint.lat - checkPoint.lat) * ky;
  return Math.sqrt(dx * dx + dy * dy) <= km;
}

export function formatTime(time) {
  const h = new Date(time * 1000).getHours();
  const m = new Date(time * 1000).getMinutes();
  const ampm = h < 12 ? "am" : "pm";

  return `${h}: ${m}${m < 10 ? 0 : ""}${ampm}`;
}

export function convertKelvinToCeluis(temp) {
  const celsuis = Math.round(temp - 273);
  return celsuis;
}

export function cloudCoverage(clouds) {
  if (clouds < 80) {
    return "Clear Skies";
  } else {
    return "Today will be cloudy";
  }
}

export function convertKelvinToFahrenheit(temp) {
  const celsius = temp - 273;
  let fahrenheit = Math.floor(celsius * (9 / 5) + 32);
  return fahrenheit;
}

export const getVisability = (visability) => {
  if (visability < 1000) {
    return "poor";
  }
  if (visability > 1000) {
    return "Moderate";
  }
};

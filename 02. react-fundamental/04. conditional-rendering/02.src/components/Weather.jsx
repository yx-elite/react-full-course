const Weather = ({ temperature }) => {
  if (temperature < 15) {
    return <h1>It's cold outside</h1>;
  } else if (temperature >= 15 && temperature < 25) {
    return <h1>It's warm outside</h1>;
  } else {
    return <h1>It's hot outside</h1>;
  }
};

export default Weather;

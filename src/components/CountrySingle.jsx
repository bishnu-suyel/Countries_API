import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { initializeCountries } from "../services/countriesServices";
import axios from "axios";
import { Button, Col, Container, Row, Spinner, Image } from "react-bootstrap";

const CountrySingle = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // const country = location.state?.country;
  const country = location.state.country;
  const [weather, setWeather] = useState("");
  const [isWeatherLoading, setIsWeatherLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${
          country.capital
        }&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
      )
      .then((response) => {
        setWeather(response.data);
        setIsWeatherLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsWeatherLoading(false);
      });
  }, [country.capital]);

  console.log("Weather:", weather);

  // Handle the loading case first

  if (isWeatherLoading) {
    // Create a spinner
    return (<Col className="text-center m-5">
      <Spinner
        animation="border"
        role="status"
        className="center"
        variant="info"
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Col>
    );
  }
    return (
      <Container fluid>
        <Row>
          <Col className="mt-5 d-flex justify-context-center">
            <Image src={country.flags.svg} />
          </Col>
          <Col>
            <h2>{country.name.common}</h2>
            <h3>{country.capital}</h3>
            <div>
              <p>
                Right now it is{" "}
                <strong>{parseInt(weather.main.temp)} °C </strong>
                degrees in {country.capital} and{" "}
                {weather.weather[0].description}.
                </p>
                <p>
                  Feels like: <strong>{weather.main.feels_like}</strong>.
                </p>
                <Image
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                />
            </div>
            <Button variant="light" onClick={() => navigate("/countries")}>
              Back to Countries
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }

  // Show weather data here (minimum requirements are: Temperature, weather description and an icon)

  // useEffect(() => {
  //   if (!country) {
  //    dispatch(initializeCountries());
  //   }
  // }, [location.state]);

export default CountrySingle;
import React, { useEffect, useState } from "react";
import { ProgressBar, Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import mapViking3 from "../mapviking3.png";

import { GiBigWave } from "react-icons/gi";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaWind } from "react-icons/fa";
import { BsArrowsExpand } from "react-icons/bs";

const NewContainer = styled(Container)`
  background-image: linear-gradient(rgba(0, 26, 26, 0.9), rgba(0, 26, 26, 0.8)),
    url(${mapViking3});
  height: 90vh;
`;

const Primarystyle = styled.p`
  color: #fff;
  font-weight: bold;
  font-size: 1em;
`;

const Secondarystyle = styled.p`
  color: #fff;
  font-weight: bold;
  font-size: 1em;
`;

const Title = styled.h1`
  font-family: Skranji;
  color: #cd5334;
  text-shadow: 1px 1px 2px white;
  margin: 20px;
`;

const Details = () => {
  const [waveHeight, setWaveHeight] = useState("");
  const [swell, setSwell] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [cloudCoverage, setCloudCoverage] = useState("");
  const lat = 58.7984;
  const lng = 17.8081;
  const params = "waveHeight,swellHeight,windSpeed,cloudCover";

  /*useEffect(() => {
    fetch(
      `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`,
      {
        headers: {
          Authorization:
            "aa7e9ff4-2a53-11eb-8ea5-0242ac130002-aa7ea06c-2a53-11eb-8ea5-0242ac130002",
        },
      }
    )
      .then((response) => response.json())
      .then((jsonData) => {
        let hours = Object.entries(jsonData)[0];
        return hours;
      })
      .then((hours) => hours[1][0])
      .then((data) => {
        if (data.waveHeight.sg < 10) {
          setWaveHeight((prev) => (prev = 30));
        }
        if (data.waveHeight.sg > 10 && data.waveHeight.sg < 20) {
          setWaveHeight((prev) => (prev = 70));
        }
        if (data.waveHeight.sg > 20) {
          setWaveHeight((prev) => (prev = 100));
        }
        if (data.swellHeight.sg < 5) {
          setSwell((prev) => (prev = 30));
        }
        if (data.swellHeight.sg > 5 && data.waveHeight.sg < 10) {
          setSwell((prev) => (prev = 70));
        }
        if (data.swellHeight.sg > 10) {
          setSwell((prev) => (prev = 100));
        }
        if (data.windSpeed.sg < 20) {
          setWindSpeed((prev) => (prev = 30));
        }
        if (data.windSpeed.sg > 20 && data.waveHeight.sg < 50) {
          setWindSpeed((prev) => (prev = 70));
        }
        if (data.windSpeed.sg > 50) {
          setWindSpeed((prev) => (prev = 100));
        }
        setCloudCoverage((prev) => (prev = data.cloudCover.sg));
      })
      .catch((err) => console.log(err));
  }, []);*/

  return (
    <NewContainer fluid>
      <Row className="justify-content-center">
        <Col className="text-center">
          <Title>DETAILS</Title>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2
            style={{
              color: "#1f7a8c",
              textShadow: "1px 1px 2px white",
              marginBottom: "10px",
            }}
          >
            PRINCIPAL
          </h2>
        </Col>
      </Row>
      <Row>
        <Col md="1" xs="4">
          <Primarystyle>
            Wave <GiBigWave style={{ marginBottom: "5px" }} />
          </Primarystyle>
        </Col>
        <Col md="11" xs="8">
          <ProgressBar variant="info" style={{ marginTop: "5px" }} now={30} />
        </Col>
      </Row>
      <Row>
        <Col md="1" xs="4">
          <Primarystyle>
            Swell <BsArrowsExpand style={{ marginBottom: "5px" }} />
          </Primarystyle>
        </Col>
        <Col md="11" xs="8">
          <ProgressBar variant="info" style={{ marginTop: "5px" }} now={70} />
        </Col>
      </Row>
      <Row>
        <Col md="1" xs="4">
          <Primarystyle>
            Wind <FaWind style={{ marginBottom: "5px" }} />
          </Primarystyle>
        </Col>
        <Col md="11" xs="8">
          <ProgressBar variant="info" style={{ marginTop: "5px" }} now={100} />
        </Col>
      </Row>
      <Row>
        <Col md="1" xs="4">
          <Primarystyle>
            Weather <TiWeatherPartlySunny style={{ marginBottom: "5px" }} />
          </Primarystyle>
        </Col>
        <Col md="11" xs="8">
          <ProgressBar variant="info" style={{ marginTop: "5px" }} now={30} />
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <h4
            style={{
              color: "#1f7a8c",
              textShadow: "1px 1px 1px white",
              marginBottom: "20px",
              marginTop: "35px",
            }}
          >
            SECONDARY
          </h4>
        </Col>
      </Row>
      <Row style={{ marginBottom: "10px" }}>
        <Col xs="6" className="text-center">
          <Secondarystyle>water temp : 7°C</Secondarystyle>
        </Col>
        <Col xs="6" className="text-center">
          <Secondarystyle>visibility : 1km</Secondarystyle>
        </Col>
        <Col xs="6" className="text-center">
          <Secondarystyle>wind direction : 141°</Secondarystyle>
        </Col>
        <Col xs="6" className="text-center">
          <Secondarystyle>precipitation : 2kg/m2</Secondarystyle>
        </Col>
      </Row>
    </NewContainer>
  );
};

export default Details;

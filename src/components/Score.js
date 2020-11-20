import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import mapViking3 from "../mapviking3.png";

import { Button, Container, Row, Col } from "react-bootstrap";
import { WiDayCloudy } from "react-icons/wi";
import { GiBigWave } from "react-icons/gi";
import { FaWind } from "react-icons/fa";

const NewContainer = styled(Container)`
  background-image: linear-gradient(rgba(0, 26, 26, 0.9), rgba(0, 26, 26, 0.8)),
    url(${mapViking3});
`;

const Title = styled.h1`
  font-family: Skranji;
  font-size: 1.4em;
  color: #cd5334;
  text-shadow: 1px 1px 2px white;
  margin: 40px;
`;

const Score = (props) => {
  const success = "green";
  const danger = "red";
  const warning = "orange";
  const lat = 30.7984;
  const lng = 20.8081;
  const params = "waveHeight,swellHeight,windSpeed,cloudCover";

  const [color, setColor] = useState("");
  const [waveColor, setWaveColor] = useState("");
  const [windColor, setWindColor] = useState("");
  const [swellColor, setSwellColor] = useState("");
  const [cloudColor, setCloudColor] = useState("");

  useEffect(() => {
    fetch(
      `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`,
      {
        headers: {
          Authorization:
            "7a50d3cc-2a64-11eb-a5a9-0242ac130002-7a50d49e-2a64-11eb-a5a9-0242ac130002",
        },
      }
    )
      .then((response) => response.json())
      .then((jsonData) => {
        let hours = Object.entries(jsonData)[0];
        console.log(hours);
        return hours;
      })
      .then((hours) => hours[1][0])
      .then((data) => {
        if (data.waveHeight.sg < 10) {
          setWaveColor((prev) => (prev = success));
        }
        if (data.waveHeight.sg > 10 && data.waveHeight.sg < 20) {
          setWaveColor((prev) => (prev = warning));
        }
        if (data.waveHeight.sg > 20) {
          setWaveColor((prev) => (prev = danger));
        }
        if (data.swellHeight.sg < 5) {
          setSwellColor((prev) => (prev = success));
        }
        if (data.swellHeight.sg > 5 && data.waveHeight.sg < 10) {
          setSwellColor((prev) => (prev = warning));
        }
        if (data.swellHeight.sg > 10) {
          setSwellColor((prev) => (prev = danger));
        }
        if (data.windSpeed.sg < 20) {
          setWindColor((prev) => (prev = success));
        }
        if (data.windSpeed.sg > 20 && data.waveHeight.sg < 50) {
          setWindColor((prev) => (prev = warning));
        }
        if (data.windSpeed.sg > 50) {
          setWindColor((prev) => (prev = danger));
        }
        if (data.cloudCover.sg < 20) {
          setCloudColor((prev) => (prev = success));
        }
        if (data.cloudCover.sg > 20 && data.cloudCover.sg < 50) {
          setCloudColor((prev) => (prev = warning));
        }
        if (data.cloudCover.sg > 50) {
          setCloudColor((prev) => (prev = danger));
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (windColor && waveColor && cloudColor) {
      if (
        windColor === success &&
        waveColor === success &&
        cloudColor === success
      ) {
        setColor((prev) => (prev = success));
      }
      if (
        windColor === warning ||
        cloudColor === warning ||
        waveColor === warning
      ) {
        setColor((prev) => (prev = warning));
      }
      if (
        windColor === danger ||
        cloudColor === danger ||
        waveColor === danger
      ) {
        setColor((prev) => (prev = danger));
      }
    } else {
      setColor((prev) => (prev = "grey"));
    }
  }, [windColor, waveColor, cloudColor]);

  return (
    <NewContainer>
      <Row className="justify-content-center">
        <Col className="text-center">
          <Title>GOOD TIME FOR RAIDS</Title>
        </Col>
      </Row>
      <Row>
        <Col>
          <div
            style={{
              backgroundColor: "#1f7a8c",
              border: `5px ${color} solid`,
              width: "15em",
              height: "15em",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 auto",
              marginBottom: "20%",
            }}
          >
            <h3
              style={{
                textAlign: "center",
                color: "#d7dedc",
                verticalAlign: "middle",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                fontFamily: "'Volkhov', serif",
                fontSize: "3em",
              }}
            >
              GO !
            </h3>
            {/* <h3 className="instruction">WAIT !</h3>
          <h3 className="instruction">DANGER !</h3> */}
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={4} style={{ padding: 0 }} className="text-center">
          <FaWind
            style={{
              fontSize: "10vh",
              color: windColor,
            }}
          />
        </Col>
        <Col xs={4} style={{ padding: 0 }} className="text-center">
          <WiDayCloudy
            style={{
              fontSize: "14vh",
              color: cloudColor,
            }}
          />
        </Col>
        <Col xs={4} style={{ padding: 0 }} className="text-center">
          <GiBigWave
            style={{
              fontSize: "10vh",
              color: waveColor,
            }}
          />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="text-center">
          <Link to="/details">
            <Button
              style={{
                backgroundColor: "#cd5334",
                cursor: "pointer",
                marginTop: "20%",
                marginBottom: "8%",
                border: "none",
                borderRadius: "3rem",
                width: "50%",
                height: "30%",
                fontFamily: "'Volkhov', serif",
              }}
            >
              DETAILS
            </Button>
          </Link>
        </Col>
      </Row>
    </NewContainer>
  );
};

export default Score;

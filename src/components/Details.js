import React from "react";
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
`;

const Details = () => {
  return (
    <NewContainer>
      <Row className="justify-content-center">
        <Col className="text-center">
          <Title>DETAILS</Title>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 style={{ color: "#1f7a8c", textShadow: "1px 1px 2px white" }}>
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
          <ProgressBar variant="info" style={{ marginTop: "5px" }} now={60} />
        </Col>
      </Row>
      <Row>
        <Col md="1" xs="4">
          <Primarystyle>
            Swell <BsArrowsExpand style={{ marginBottom: "5px" }} />
          </Primarystyle>
        </Col>
        <Col md="11" xs="8">
          <ProgressBar variant="info" style={{ marginTop: "5px" }} now={40} />
        </Col>
      </Row>
      <Row>
        <Col md="1" xs="4">
          <Primarystyle>
            Wind <FaWind style={{ marginBottom: "5px" }} />
          </Primarystyle>
        </Col>
        <Col md="11" xs="8">
          <ProgressBar variant="info" style={{ marginTop: "5px" }} now={20} />
        </Col>
      </Row>
      <Row>
        <Col md="1" xs="4">
          <Primarystyle>
            Weather <TiWeatherPartlySunny style={{ marginBottom: "5px" }} />
          </Primarystyle>
        </Col>
        <Col md="11" xs="8">
          <ProgressBar variant="info" style={{ marginTop: "5px" }} now={20} />
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <h4 style={{ color: "#1f7a8c", textShadow: "1px 1px 1px white" }}>
            SECONDARY
          </h4>
        </Col>
      </Row>
      <Row>
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

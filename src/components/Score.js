import React from "react";
import styled from "styled-components";

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

const Score = () => {
  const success = "green";
  const danger = "red";
  const warning = "orange";

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
              border: `5px ${danger} solid`,
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
              color: danger,
              marginLeft: "4%",
            }}
          />
        </Col>
        <Col xs={4} style={{ padding: 0 }} className="text-center">
          <WiDayCloudy
            style={{
              fontSize: "14vh",
              color: danger,
            }}
          />
        </Col>
        <Col xs={4} style={{ padding: 0 }} className="text-center">
          <GiBigWave
            style={{
              fontSize: "10vh",
              color: danger,
              marginLeft: "10%",
            }}
          />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="text-center">
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
        </Col>
      </Row>
    </NewContainer>
  );
};

export default Score;

import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { WiDayCloudy } from "react-icons/wi";
import { GiBigWave } from "react-icons/gi";
import { FaWind } from "react-icons/fa";

const Score = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2
            style={{
              fontFamily: "Skranji",
              marginTop: "15%",
              marginBottom: "15%",
              textAlign: "center",
              color: "#2e282a",
            }}
          >
            GOOD TIME FOR RAIDS
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <div
            style={{
              backgroundColor: "#2e282a",
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
                color: " #d7dedc",
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
      <Row>
        <Col>
          <FaWind
            style={{
              display: "inline-flex",
              fontSize: "10vh",
              color: "#053c5e",
              marginLeft: "4%",
            }}
          />
        </Col>
        <Col>
          <WiDayCloudy
            style={{
              display: "inline-flex",
              fontSize: "14vh",
              color: "#053c5e",
            }}
          />
        </Col>
        <Col>
          <GiBigWave
            style={{
              display: "inline-flex",
              fontSize: "10vh",
              color: "#053c5e",
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
    </Container>
  );
};

export default Score;

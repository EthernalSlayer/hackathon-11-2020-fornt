import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Form, Col, Container, Row, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import cities from "../ressources/cities";
import styled from "styled-components";
import mapViking3 from "../mapviking3.png";

const NewContainer = styled(Container)`
  background-image: linear-gradient(rgba(0, 26, 26, 0.9), rgba(0, 26, 26, 0.8)),
    url(${mapViking3});
  height: 90vh;
`;

const Primarystyle = styled(Form.Label)`
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

const Home = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [arrival, setArrival] = useState();
  const [departure, setDeparture] = useState();

  function handleChangeDeparture(e) {
    setDeparture((prev) => {
      prev = e.target.value;
    });
  }
  function handleChangeArrival(e) {
    setArrival((prev) => {
      prev = e.target.value;
    });
  }

  return (
    <div>
      <NewContainer>
        <Row className="justify-content-center">
          <Title>HOME</Title>
        </Row>
        <Row className="justify-content-md-center text-center  ml-4">
          <Form.Group>
            <Form.Row>
              <Primarystyle column htmlFor="Departure">
                Departure :
              </Primarystyle>
              <Form.Control
                className="xl"
                as="select"
                onChange={handleChangeDeparture}
              >
                {cities.map((city) => {
                  return <option key={city.name}>{city.name}</option>;
                })}
              </Form.Control>
            </Form.Row>
            <br />
            <Form.Row>
              <Primarystyle column htmlFor="arrival">
                Arrival :
              </Primarystyle>

              <Form.Control as="select" onChange={handleChangeArrival}>
                {cities.map((city) => {
                  return <option key={city.name}>{city.name}</option>;
                })}
              </Form.Control>
            </Form.Row>
            <br />
            <Form.Row>
              <Col>
                <Primarystyle>Date</Primarystyle>
                <br />
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </Col>
            </Form.Row>

            <Link
              to={{
                pathname: "/Score",
                cities: { arrival: arrival, departure: departure },
              }}
            >
              <Button
                variant="info"
                style={{
                  backgroundColor: "#cd5334",
                  marginTop: "25px",
                  marginLeft: "100px",
                }}
              >
                VALIDER
              </Button>
            </Link>
          </Form.Group>
        </Row>
      </NewContainer>
    </div>
  );
};

export default Home;

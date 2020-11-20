import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Form, Col, Container, Row, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import cities from "../ressources/cities";
import styled from "styled-components";
import mapViking3 from "../mapviking3.png";

const NewContainer = styled(Container)`
  background-image: linear-gradient(rgba(0, 26, 26, 0.9), rgba(0, 26, 26, 0.8)),color:
    url(${mapViking3});
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
      <NewContainer >
        <Row className="justify-content-md-center  ml-4">
          <Form.Group>
            <Form.Row>
              <Form.Label column htmlFor="Departure">
                Departure :
              </Form.Label>
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
              <Form.Label column htmlFor="arrival">
                Arrival :
              </Form.Label>

              <Form.Control as="select" onChange={handleChangeArrival}>
                {cities.map((city) => {
                  return <option key={city.name}>{city.name}</option>;
                })}
              </Form.Control>
            </Form.Row>
            <br />
            <Form.Row>
              <Col>
                <Form.Label>Date</Form.Label>
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
                  backgroundColor: "black",
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

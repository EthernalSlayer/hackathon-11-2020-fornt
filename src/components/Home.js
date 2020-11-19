import React, { useState } from "react";
import { Form, Col, Container, Row , Button} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CityList from "./CityList";

const Home = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      Home
      <Container>
        <Row className="justify-content-md-center">
          <Form.Group>
          <Form.Row>
              <Form.Label column="sm" lg={2}>
                Date
              </Form.Label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </Form.Row>
            <Form.Row>
              <Form.Label column htmlFor="arrival">
                Arrival
              </Form.Label>
              <Col xs="auto">
              <CityList />
              </Col>
            </Form.Row>
            <br />
            <Form.Row>
              <Form.Label column htmlFor="Departure">
              Departure
              </Form.Label>
              <Col xs="auto">
              <CityList />
              </Col>
              <Button variant="dark">Valider</Button>
            </Form.Row>
          </Form.Group>
        </Row>
      </Container>
    </div>
  );
};

export default Home;

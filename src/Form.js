import { Form } from 'react-bootstrap';
import DateChoice from 'DateChoice';


const Form = () => {
return (<Form.Group>
  <Form.Row>
    <Form.Label column="lg" lg={2} htmlFor="departure">
      Departure
    </Form.Label>
    <Col xs="auto">
    <Form.Control as="select" id="departure">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
    </Col>
  </Form.Row>
  <br />
  <Form.Row>
    <Form.Label column lg={2} htmlFor="arrival">
      Arrival
    </Form.Label>
    <Col xs="auto">
    <Form.Control as="select" id="arrival">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
    </Col>
  </Form.Row>
  <br />
  <Form.Row>
    <Form.Label column="sm" lg={2}>
      Date
    </Form.Label>
        <DateChoice />
  </Form.Row>
</Form.Group>
)
}

export default Form;
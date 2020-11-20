import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo2.png";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const StyledHeader = styled(Container)`
  background-color: #1f7a8c;
`;

const StyledTitle = styled(Col)`
  font-size: 40px;
  color: white;
  font-family: skranji;
`;

const StyleImg = styled.img`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Header = () => {
  return (
    <StyledHeader fluid>
      <Row className="align-items-center">
        <Col md={5} xs={4} style={{ padding: 0 }}>
        <Link to="/home"><StyleImg src={logo} alt="Logo" width={80} /></Link>
        </Col>
        <Col md={7} xs={8}>
          <StyledTitle>Volva</StyledTitle>
        </Col>
      </Row>
    </StyledHeader>
  );
};

export default Header;

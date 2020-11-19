import React, {Component} from 'react';
import logo from './logo.png';
import {Container , Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const StyledHeader =styled(Container)`
background-color:#2E282A;
height: 100px;
`




const Header = () => {
     return (
        <StyledHeader fluid>
            <Row>
                <Col sm={3}><img src={logo} alt="Logo" width={100} /></Col>
                <Col sm={9}>Volva</Col>
            </Row>
            
        </StyledHeader>
     )
}

export default Header
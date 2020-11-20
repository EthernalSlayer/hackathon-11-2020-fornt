import React, {Component} from 'react';
import logo from './logo.png';
import {Container , Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const StyledHeader =styled(Container)`
background-color:#1F7A8C;
`

const StyledTitle = styled(Col)`
font-size:40px;
color:white;
font-family:skranji;
`

const StyleImg = styled.img`
    margin-top: 10px;
    margin-bottom: 10px;
`


const Header = () => {
     return (
        <StyledHeader fluid>
            <Row className="align-items-center">
                <Col md={5} xs={4}><StyleImg src={logo} alt="Logo" width={80} /></Col>
                <Col md={7} xs={8}><StyledTitle>Volva</StyledTitle></Col>
            </Row>
            
        </StyledHeader>
     )
}

export default Header
import React, {Component} from 'react';
import logo from './logo.png';
import {Container , Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const StyledCol=styled(Col)`
background-color:#1F7A8C;
height:30px;
`
const Footer = () => {

    return(

        <Container fluid>
        <Row>
            <StyledCol sm={12}></StyledCol>
        </Row>
        
        </Container>
 )


}

export default Footer;
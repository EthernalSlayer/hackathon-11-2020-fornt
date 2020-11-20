import React, {Component} from 'react';
import {Button, Container, Row, Col} from "react-bootstrap"
import {Link} from "react-router-dom"


const Entry = () => {
    return(
        <>
        <Container style={{display: "flex",height: "85vh"}}>
            <Row className="justify-content-center align-items-center" style={{width: "100%"}}>
                    <Link to="/home"><Button variant="info" style={{backgroundColor:"black"}}>ENTRY</Button></Link>
            </Row>
        </Container>
        <div className="bg"></div>
        <div className="lightning flashit"></div>
        </>
    )

}

export default Entry;


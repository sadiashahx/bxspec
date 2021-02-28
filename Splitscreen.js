import React, {Component} from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import './Splitscreen.css';


function Splitscreen() {
  return (
    <div> 
      <Container fluid>
  <Row>
    <Col xs={12} sm={12} md={12} lg={6} className="col">
        <div className="left-side"></div>
    </Col>
    <Col xs={12} sm={12} md={12} lg={6} className="col">
        <div className="right-side"></div>
    </Col>
  </Row>
  
</Container>
       
    </div>
  );
}


export default Splitscreen;
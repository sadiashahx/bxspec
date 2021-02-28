import React, {Component} from 'react';
import {Container, Col, Row } from 'react-bootstrap';
import Header from '../components/navbar/Header';
import Connectpost from '../Connectpost';
import './Homee.css';


function Homee() {
  return (
    <div> 
    
    <div>
    <Header/>
    </div>

  <Container>
  <Row className="autism-row">
    <Col xs={12} sm={12} md={6} lg={6}><p className="autism-p">Much research has been conducted to try to aid the identification of Autism Spectrum Disorder in early childhood. Some clear signs have now been identified that help parents to recognize the symptoms & characteristics of Autism and other possible developmental challenges in their own children. Many typically developing children will be using most of these social skills by about age 12 months. However, it is very important to be aware that there is a very wide variety in the way children develop in the first three years of life. Many children who seem delayed at 12 or 18 months will catch up with their peers by 36 months with common developmental milestones.</p></Col>
    <Col xs={12} sm={12} md={6} lg={6}><img className="autism-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXDb_6zBxSmPmOV5pLT9J-jXiIVzAGc8xjsQ&usqp=CAU"/></Col>
  </Row>
  </Container>

  <div>
    <Connectpost/>
  </div>
 
       </div>
    

  



  );
}


export default Homee;
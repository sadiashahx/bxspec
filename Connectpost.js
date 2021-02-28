import React, {Component} from 'react';
import {Container, Jumbotron } from 'react-bootstrap';
import './Connectpost.css';


function Connectpost() {
  return (
    <div> 
        <div className="connect">
        <h4 className="connect-h4">Connect with us</h4>
        <p className="connect-p">
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
        </p>
        <p>
        <button className="connect-b">Talk to us</button>
        </p>
        </div>
       
    </div>
  );
}


export default Connectpost;
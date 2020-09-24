import React, { Component } from "react"
import CompactSidebar from "./components/compactsidebar";
import TopNav from "./components/topnav";
import {Container, Row, Col, Table} from "react-bootstrap";
import "../stylesheets/mainStyle.css";

class ContactMe extends Component{
  render (){
    return (
      <div className="body-page">
      <TopNav selected="contactme"></TopNav>
      <Container fluid>
        <Row>
          <Col md="1" className="d-none d-md-block"><CompactSidebar></CompactSidebar></Col>
          <Col md="11">
            <div className ="infoside">
              <div className="pageHead">
                <p>Contact Me !</p>
              </div>
              <div className ="contact-text">
                Hey! For any Feedback or Technical Discussion feel free to reach out to me.
                <br></br>
                Email ID:
                <p>
                  <div className="emailID">aishwarya.asah@gmail.com</div>
                  <div className="emailID">saha@vmware.com</div>
                </p>
                On the web feel free to drop a message on any of these sites (Order of response time): 
                  <a href="https://www.linkedin.com/in/aishwarya-sah-bbb674131/" target="_blank" rel="noopener noreferrer"> Linkedin </a>
                    > 
                  <a href="https://twitter.com/SahAishwarya" target="_blank" rel="noopener noreferrer"> Twitter </a>
                    > 
                  <a href="https://www.quora.com/profile/Aishwarya-Sah" target="_blank" rel="noopener noreferrer"> Quora </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    );
  };
}

export default ContactMe;
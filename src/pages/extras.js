import React, { Component } from "react"
import SideNav from "./components/sidenav";
import TopNav from "./components/topnav";
import {Container, Row, Col, Jumbotron} from "react-bootstrap";
import "../stylesheets/mainStyle.css";

class Extras extends Component{
  render (){
    return (
      <div className="body-page">
      <TopNav selected="extras"></TopNav>
      <Container fluid>
        <Row>
          <Col sm="12" md="3"><SideNav></SideNav></Col>
          <Col   md="9">
            <div className ="infoside">
              <Jumbotron fluid>
                <h1>Extras</h1>
              </Jumbotron>
              <div className ="extraBox">
                <h3>Current obsession: </h3> <p>Reading : 5 am club by Robin Sharma and Gyming.</p>
                <h3>Reading</h3>
                <p>
                  Have recently taken up reading and I am loving it. Completed : none yet. 
                </p>
                <h3>Debating</h3>
                <p>
                  I was a part of the Kronicle - litaray Society of KIIT during 1st year of B.Tech. But I enjoy talking (Well who doesn't :-P). So, always try to improve my oratory skills.
                </p>
                <h3>Dancing</h3>
                <p>
                  I enjoy freestyle dancing and am always up for it. I was a part of DoUCrew - My college dance group for a couple of years. And Had learned khathak as a kid but that feels like ages ago.  
                </p>
                <h3>Drawing</h3>
                <p>
                  I had always been amazed by arts and crafts but was never good at it. So, in 2018 had taken up drawing (inspired from ones that I found in Pinterest, instagram or google). You can check some out.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    );
  };
}

export default Extras;
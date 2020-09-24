import React, { Component } from "react"
import CompactSidebar from "./components/compactsidebar";
import TopNav from "./components/topnav";
import { Link } from "gatsby"
import {Container, Row, Col, Jumbotron} from "react-bootstrap";
import "../stylesheets/mainStyle.css";
import TextLoop from "react-text-loop";
import dp from "../images/profileimage.jpeg";
import love from "../images/loveicon.png"

class About extends Component{
  render (){
    return (
      <div className="body-page">
      <TopNav selected="about"></TopNav>
      <Container fluid>
        <Row>
          <Col md="1" className="d-none d-md-block"><CompactSidebar></CompactSidebar></Col>
          <Col md="11">
            <div className ="infoside">
              <div className="pageHead">
                <p>About Me !</p>
              </div>
              <div className="box_block">
                <Container>
                  <Row>
                    <Col md="4">
                      <img
                      className="profileimage"
                      src={dp}
                      width="200px"
                      alt=""
                      />
                      <div className="tagline-content">
                      I <img src={love} width="50px"></img>
                  <TextLoop interval={1500}>
                    <span> Technology</span>
                    <span> Learning New Things</span>
                    <span> Problem Solving</span>
                    <span> Food</span>
                    <span> Dance</span>
                  </TextLoop>
                  </div>
                    </Col>
                    <Col md="8">
                      <p className="aboutp">
                        I am working at <u>VMware</u>. I have completed my <u>B. Tech degree in Computer Science and Engineering</u> from <u>Kalinga Institute of Industrial Technology(KIIT), Bhubaneswar, India</u>.
                      </p>
                      <p className="aboutp">
                        I am deeply drawn to the idea of technology changing the lives of people around the globe. And love exploring new technologies. Currently, I am learning about Distributed Systems using Case studies of various company products.
                      </p>
                      <p className="aboutp">
                        I plan to write about the things that I learn and will be working on <Link to="/blogs">here</Link>.
                      </p>
                      <p className="aboutp">
                        I am passionate about programming and have worked on several programming languages and technologies. 
                        But also believe in the fact that Languages and Technologies can be learned if you are comfortable with the fundamental building blocks of 
                        Computer Science.
                      </p>
                      <p className="aboutp">
                        I engage in various other pursuits during my free time. Including dancing, drawing, and reading.
                        I love to watch movies and series of different genres as well.
                      </p>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    );
  };
}

export default About;
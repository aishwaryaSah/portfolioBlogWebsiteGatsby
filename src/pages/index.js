import React, { Component } from "react"
import SideNav from "./components/sidenav"
import TopNav from "./components/topnav";
import {Container, Row, Col} from "react-bootstrap";
import "../stylesheets/mainStyle.css";

class IndexPage extends Component{
  render (){
    return (
      <div className="body-page">
        <TopNav selected="home"></TopNav>
        <Container fluid>
          <Row>
            <Col sm="12" md="3"><SideNav></SideNav></Col>
            <Col   md="9">
              <div className="infoside">
                <div className="imgPort">
                  <div className="writeup">
                    <h3>Hello!       I'm</h3>
                    <h1>Aishwarya Sah.</h1>
                    <h2>Software Engineer at VMware</h2>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };
}

export default IndexPage;
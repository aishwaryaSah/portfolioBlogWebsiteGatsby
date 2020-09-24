import React, { Component } from "react"
import { Link } from "gatsby"
import navigation_list from "../../navigation/nav_list"
import "./topnavbar.css";
import {Navbar,Nav} from "react-bootstrap";

var pageList = navigation_list();

class TopNav extends Component{
  render (){
    return (
      <Navbar bg="primary" expand="md" className="borderbox">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto topnav">
        {
          pageList.map(page => {
            if(page.id===this.props.selected ){
              return (
                <div className="link_tabs selected" key={page.id}>
                  <Link
                    to={page.link}
                    selected={this.props.selected === page.id}
                    id={page.id}
                    className={page.id}
                    key={page.id}
                  >
                  {page.name}
                  </Link>
                </div>
                  );
            }
            else{ 
              return (
                <div className="link_tabs" key={page.id}>
              <Link
                to={page.link}
                selected={this.props.selected === page.id}
                id={page.id}
                className={page.id}
                key={page.id}
              >
                {page.name}
              </Link>
              </div>
              );
            }
          })
        }
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };
}

export default TopNav;
import React, { Component } from "react"
import { Link } from "gatsby"
import navigation_list from "../navigation/nav_list_blogs"
import "../navigation/nav_list_blogs";
import {Navbar,Nav} from "react-bootstrap";

var pageList = navigation_list();

class TopNavBlog extends Component{
  render (){
    return (
      <Navbar bg="primary" expand="md">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="topnav">
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

export default TopNavBlog;
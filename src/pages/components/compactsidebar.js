import React, { Component } from "react";
import "./sidenav.css";
import navigation_list from "../../navigation/nav_list"
import dp from "../../images/profileimage.jpeg"
import linkedin from "../../images/linkedin.png"
import github from "../../images/github.png"
import quora from "../../images/quora.png"
import twitter from "../../images/twitter.png"
import leetcode from "../../images/leetcode.png"
import codechef from "../../images/codechef.png"
import {Tooltip, OverlayTrigger} from "react-bootstrap";

class CompactSidebar extends Component{
  render (){
    return (
    <div className="sidenav">
      <br></br>
      <img
      className="profileimage"
      src={dp}
      width="200px"
      alt=""
      />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="social_links vertical_social_links">
        <OverlayTrigger
          overlay={
            <Tooltip id={`tooltip`}>
              https://www.linkedin.com/in/aishwarya-sah-bbb674131/
            </Tooltip>
          }
        >
          <a href="https://www.linkedin.com/in/aishwarya-sah-bbb674131/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="Linkedin"></img>
          </a>
        </OverlayTrigger>
        
        <br></br>
        <br></br>
        
        <OverlayTrigger
          overlay={
            <Tooltip id={`tooltip`}>
              https://github.com/asah27
            </Tooltip>
          }
        >
          <a href="https://github.com/asah27" target="_blank" rel="noopener noreferrer">
            <img alt="Github" src={github}></img>
          </a>
        </OverlayTrigger>

        <br></br>
        <br></br>

        <OverlayTrigger
          overlay={
            <Tooltip id={`tooltip`}>
              https://www.quora.com/profile/Aishwarya-Sah
            </Tooltip>
          }
        >
          <a href="https://www.quora.com/profile/Aishwarya-Sah" target="_blank" rel="noopener noreferrer">
            <img src={quora} alt="Quora"></img>
          </a>
        </OverlayTrigger>

        <br></br>
        <br></br>

        <OverlayTrigger
          overlay={
            <Tooltip id={`tooltip`}>
              https://twitter.com/SahAishwarya
            </Tooltip>
          }
        >
          <a href="https://twitter.com/SahAishwarya" target="_blank"rel="noopener noreferrer">
            <img src={twitter} alt="Twitter"></img>
          </a>
        </OverlayTrigger>

      {/* <OverlayTrigger
        overlay={
          <Tooltip id={`tooltip`}>
            https://leetcode.com/aish27/
          </Tooltip>
        }
      >
        <a href="https://leetcode.com/aish27/" target="_blank"><img src={leetcode}></img></a>
      </OverlayTrigger>

      <OverlayTrigger
        overlay={
          <Tooltip id={`tooltip`}>
            https://www.codechef.com/users/asah
          </Tooltip>
        }
      >
        <a href="https://www.codechef.com/users/asah" target="_blank"><img src={codechef}></img></a>
      </OverlayTrigger>
         */}
      </div>
      <div className="madeby">
         Made by
         <br></br> Aishwarya 
         <br></br>Sah
      </div>
    </div>
    );
  };
}

export default CompactSidebar;
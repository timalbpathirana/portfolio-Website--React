import React from "react";
import "./TopBar.scss";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <HomeIcon fontSize="large" />
          </a>
          <div className="itemContainer">
            <LinkedInIcon classname="icon " /> <span>link</span>
          </div>
          <div className="itemContainer">
            <GitHubIcon classname="icon " /> <span>link</span>
          </div>
        </div>
        <div className="right">
          <MenuIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}

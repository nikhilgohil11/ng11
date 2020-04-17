import React from "react";
import { Link } from "gatsby";
import {
  FaTwitter
} from "react-icons/fa";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { GoMarkGithub } from "react-icons/go";

const Footer = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
      hamburgerMenuClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
              hamburgerMenuClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: "",
              hamburgerMenuClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav className="navbar is-spaced" id="ar-navbar">
        <div className="container">
          <div
            id="ar-navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start">
            <Link to="/" className="navbar-item">
            <span> &nbsp;© Copyright 2020 &nbsp;Nikhil Gohil</span>
              </Link>
              <Link to="/contact" className="navbar-item">
              <span> &nbsp;Contact</span>
              </Link>
              
            </div>
            <div className="navbar-end">
            <Link to="/privacy-policy" className="navbar-item">
            <span>Privacy Policy</span>
            </Link>
              <OutboundLink
                className="navbar-item is-hidden-desktop-only"
                href="https://github.com/nikhilgohil11"
                target="_blank"
              >
                <span className="icon">
                  <GoMarkGithub size={24} />
                </span>
              </OutboundLink>
              <OutboundLink
                className="navbar-item is-hidden-desktop-only"
                href="https://twitter.com/nikhilgohil11"
                target="_blank"
              >
                <span className="icon" style={{ color: "#55acee" }}>
                  <FaTwitter size={24} />
                </span>
              </OutboundLink>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default () => (
  <Footer/>
);

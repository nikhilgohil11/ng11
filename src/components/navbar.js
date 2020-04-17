import React from "react";
import { Link } from "gatsby";
import {
  FaRegThumbsUp,
  FaTwitter,
  FaHome,
  FaBullhorn,
  FaBook,
} from "react-icons/fa";
import { OutboundLink } from "gatsby-plugin-google-analytics";

const Navbar = class extends React.Component {
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
          <div className="navbar-brand">
            <OutboundLink
              className="navbar-item is-hidden-desktop"
              href="https://twitter.com/nikhilgohil11"
              target="_blank"
            >
              <span className="icon" style={{ color: "#55acee" }}>
                <FaTwitter size={24} />
              </span>
            </OutboundLink>
            <div
              role="button"
              className={`navbar-burger burger ${this.state.hamburgerMenuClass}`}
              onClick={() => this.toggleHamburger()}
              onKeyDown={() => this.toggleHamburger()}
              aria-label="menu"
              aria-expanded="false"
              data-target="ar-navMenu"
              tabIndex={0}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </div>
          </div>

          <div
            id="ar-navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start">
              <Link to="/" className="navbar-item">
                <FaHome color="turquoise" /> <span> &nbsp;Home</span>
              </Link>
              <Link to="/blog" className="navbar-item">
                <span className="icon">
                  <FaBook color={"#f4b640"}></FaBook>
                </span>
                <span>Blog</span>
              </Link>
              <Link to="/topics" className="navbar-item">
                <FaBullhorn color="turquoise" />
                <span> &nbsp;Topics</span>
              </Link>
              <Link to="/recommended" className="navbar-item">
                <FaRegThumbsUp color="#f4b640" /> <span> &nbsp; Recommended</span>
              </Link>
              
            </div>
            <div className="navbar-end">
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
  <Navbar/>
);

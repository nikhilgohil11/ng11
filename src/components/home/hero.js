import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import PreviewCompatibleImage from "../preview-compatible-image";
import Particles from "react-particles-js";
import Typical from 'react-typical'
import {BrowserView, MobileView} from 'react-device-detect';

export default function Hero() {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const page = data.markdownRemark;
        return (
          <div className="hero-wrapper">
            <section className="hero is-primary is-bold position-relative">
              <div id="particles-js">
              <BrowserView>
              <Particles
                  params={{
                    "particles": {
                        "number": {
                            "value": 250
                        },
                        "size": {
                            "value": 1
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": false,
                                "mode": "repulse"
                            }
                        }
                    }
                }} 
              />
              </BrowserView>
              <MobileView>
              <Particles
                  params={{
                    "particles": {
                        "number": {
                            "value": 50
                        },
                        "size": {
                            "value": 1
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": false,
                                "mode": "repulse"
                            }
                        }
                    }
                }} 
              />
              </MobileView>
              </div>
              <div className="hero-body">
                <div className="container">
                  <div className="columns is-vcentered">
                    <div className="column is-5 landing-caption">
                      <figure className="image">
                        {/* TODO: load image from site meta */}
                        <img
                          className="is-rounded hero-avatar"
                          src="/img/nikhil.jpg"
                          alt=""
                        />
                      </figure>
                      <h1 className="title is-1 is-light is-semibold is-spaced main-title">
                        <Typical 
                        steps={['I am Nikhil Gohil', 3000]}
                        wrapper="p"
                        style={{
                          position: "absolute",
                          width: "100%",
                          height: "100%"
                        }}
                        />
                        </h1>
                      {/* </figure> */}
                      <h2 className="subtitle is-light is-thin">
                        {page.frontmatter.subheading}
                      </h2>
                      <p>
                        <Link
                          to="/contact"
                          className="button k-button k-primary raised has-gradient is-fat is-bold"
                        >
                          <span className="text"> Read More</span>
                          <span className="front-gradient"></span>
                        </Link>
                      </p>
                    </div>
                    <div className="column is-7">
                      <figure className="image">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: page.frontmatter.image,
                            alt: `${page.frontmatter.heading}`
                          }}
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      }}
    />
  );
}

export const query = graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        heading
        subheading
        image {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

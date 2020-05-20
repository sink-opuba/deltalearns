import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { MdLocationOn, MdEmail, MdPhone, MdArrowForward } from "react-icons/md"

import "./Footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row xs={1} md={2}>
          <Col>
            <ul className="footer-contact__details">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.google.com/maps/place/Warri+Innovation+Hub/@5.5300747,5.7717313,17z/data=!4m25!1m19!4m18!1m9!2m2!1d5.7826606!2d5.5440522!3m4!1m2!1d5.7752192!2d5.529821!3s0x1041b27ef317b31f:0x5a79579a6b98173b!4e1!1m6!1m2!1s0x1041b36023a3e9ad:0x8431eccdd7bd5ab7!2swarri+innovation+hub!2m2!1d5.7720592!2d5.5272815!3e0!3m4!1s0x1041b36023a3e9ad:0x8431eccdd7bd5ab7!8m2!3d5.5272815!4d5.7720592"
                >
                  <span>
                    <MdLocationOn />
                  </span>
                  3rd floor, Isoken Plaza, Enerhen Junction, Warri.
                </a>
              </li>
              <li>
                <a href="mailto:info@deltalearns.com">
                  <span>
                    <MdEmail />
                  </span>
                  info@deltalearns.com
                </a>
              </li>
              <li>
                <a href="tel:+2347065049195">
                  <span>
                    <MdPhone />
                  </span>
                  +2347065049195
                </a>
              </li>
            </ul>
          </Col>
          <Col>
            <div className="newsletter-container">
              <h3>Get Updates Right in your inbox</h3>
              <form>
                <div>
                  <input type="email" placeholder="Your Email" />
                  <button type="submit">
                    <MdArrowForward />
                  </button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
      <div>
        <div className="copyright">
          <p>
            {" "}
            {new Date().getFullYear()} © DeltaLearns. All rights reserved.
            Powered by <a href="https://warriinnovationhub.com">Waffiihub</a>.
          </p>
        </div>
      </div>

      <div className=""></div>
    </footer>
  )
}

export default Footer

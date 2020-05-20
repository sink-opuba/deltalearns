import React, { useState } from "react"
import { navigate } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { MdLocationOn, MdEmail, MdPhone, MdArrowForward } from "react-icons/md"

import "./Footer.scss"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Footer = () => {
  const [state, setState] = useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

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
              <form
                name="NewsLetter"
                data-netlify="true"
                method="post"
                action="/thanks/"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="NewsLetter" />
                <p hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={handleChange} />
                  </label>
                </p>
                <div>
                  <input
                    name="Email"
                    type="email"
                    placeholder="Your email"
                    title="The domain portion of the email address is invalid (the portion after the @)."
                    pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
                    onChange={handleChange}
                    required
                  />
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

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="index-container">
      <div className="index-header__box">
        <h2 className="index-header__text">
          Learn Valuable <br></br> Skills Online,{" "}
          <span className="index-header__little">at little or no cost.</span>
        </h2>

        <h4 className="index-header__line">
          An online learning platform for Deltans to acquire the technical and
          soft skills needed for this times.
        </h4>

        <Link to="/register">Get Started</Link>
      </div>

      <div className="index-image-box">
        <Image />
      </div>
    </div>
  </Layout>
)

export default IndexPage

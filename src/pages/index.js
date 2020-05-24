import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ButtonLink from "../components/Shared/ButtonLink"
import PopularCourses from "../components/PopularCourses/PopularCourses"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="index-container">
      <section className="index-header">
        <div className="index-header__box">
          <h2 className="index-header__text">
            Learn Valuable <br></br> Skills Online,{" "}
            <span className="index-header__little">at little or no cost.</span>
          </h2>

          <h4 className="index-header__line">
            An online learning platform for Deltans to acquire the technical and
            soft skills needed for this times.
          </h4>
          <ButtonLink dest="/register" bgColor="#fc6084">
            Get Started
          </ButtonLink>
        </div>

        <div className="index-image-box">
          <Image alt="learners sketch" filename="learners.png" />
        </div>
      </section>

      <div className="text-center">
        <h2 className="index-popular__heading">Most Popular Demand Courses</h2>
        <PopularCourses />

        <div className="text-center mb-5 mt-5 pt-5">
          <ButtonLink dest="/courses" bgColor="#fc6084">
            view all courses
          </ButtonLink>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

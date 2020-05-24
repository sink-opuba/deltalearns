import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CoursesPage = (props: PageProps) => (
  <Layout path={props.path}>
    <SEO title="Page two" />
    <div style={{ height: "50vh", textAlign: "center", marginTop: "20px" }}>
      <h1>Coming Soon!!!</h1>
      <p>See all courses</p>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default CoursesPage

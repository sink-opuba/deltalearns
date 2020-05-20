import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
const ThanksPage = () => {
  return (
    <Layout>
      <SEO title="Thanks" />
      <div style={{ textAlign: "center", margin: "3rem 0", height: "50vh" }}>
        <h2>
          You've Done well. Thank You!
          <span role="img" aria-label="thumbsup emoji">
            👍
          </span>
        </h2>
        <p>You'll get a scoop on the latest at DeltaLearns.</p>
      </div>
    </Layout>
  )
}
export default ThanksPage

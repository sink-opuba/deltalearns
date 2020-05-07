// Gatsby supports TypeScript natively! -Ok I have heard, but right now there's no time for that.
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PaymentPage = (props: PageProps) => (
  <Layout>
    <SEO title="Payment" />
    <h1>Weldone for Making it this Far!</h1>
    <p>COMING SOON</p>
  </Layout>
)

export default PaymentPage

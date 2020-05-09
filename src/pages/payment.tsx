// Gatsby supports TypeScript natively! -Ok I have heard, but right now there's no time for that.
import React, { useState } from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PaymentPage = (props: PageProps) => {
  const [showDetails, setShowDetails] = useState(false)
  return (
    <Layout path={props.path}>
      <SEO title="Payment" />
      <div className="payment-container">
        <h2 className="payment-heading">Choose preferred payment method</h2>
        <ul className="payment-options__list">
          <li>
            Pay online - <a href="/#">Click here</a>
          </li>
          <li>
            Pay offline -{" "}
            <span onClick={() => setShowDetails(!showDetails)}>
              {showDetails ? "Hide Details" : "See Details"}
            </span>
          </li>
        </ul>
      </div>
      {showDetails && (
        <div className="payment-container">
          <ul className="offline-details__list">
            <li>Account Number: 1014629056 </li>
            <li>Account Name: LESSSTRESS SOLUTIONS LIMITED</li>
            <li>Bank: Zenith Bank Plc</li>
            <li>Amount: NGN 3,000</li>
          </ul>
          <small>
            *To confirm your payment, send your details to
            payments@deltalearns.com
          </small>
        </div>
      )}
    </Layout>
  )
}

export default PaymentPage

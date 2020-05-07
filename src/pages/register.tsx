// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RegistrationForm from "../components/RegistrationForm/RegistrationForm"

const RegisterPage = (props: PageProps) => (
  <Layout path={props.path} location={props.location}>
    <SEO title="Register" />
    <div className="reg-container">
      <RegistrationForm />
    </div>
  </Layout>
)

export default RegisterPage

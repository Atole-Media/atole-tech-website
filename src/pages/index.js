import * as React from "react"
import { Link } from "gatsby"
import Hero from "../components/indexComps/hero"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Hero />

    <SEO title="Home" />
  </Layout>
)

export default IndexPage

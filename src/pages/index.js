import * as React from "react"
// import { Link } from "gatsby"
import { Hero, WhatIs } from "../components/index"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Hero />
    <WhatIs />
    <Seo title="Home" />
  </Layout>
)

export default IndexPage

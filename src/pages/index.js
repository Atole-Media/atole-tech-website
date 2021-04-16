import * as React from "react"
// import { Link } from "gatsby"
import { MainHeader, WhatIs, Services } from "../components/index"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <MainHeader />
    <WhatIs />
    <Services />
    <Seo title="Home" />
  </Layout>
)

export default IndexPage

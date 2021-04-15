import * as React from "react"
// import { Link } from "gatsby"
import { MainHeader, WhatIs } from "../components/index"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout title="Atole Tech">
    <MainHeader />
    <WhatIs />
    <Seo title="Home" />
  </Layout>
)

export default IndexPage
 
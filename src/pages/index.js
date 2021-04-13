import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

export const Content = styled.h1`
  color: var(--niceBlue);

  
`

const IndexPage = () => (
  <Layout>
    <Content>Cool Beans</Content>

    <SEO title="Home" />
  </Layout>
)

export default IndexPage

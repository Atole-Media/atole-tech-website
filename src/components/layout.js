import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import { Navbar } from "./index"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  li{
    list-style:none;
  }
  a{
    text-decoration:none;
  }
  body {
    --niceBlue: #2766A9;
    --purple: #1A042B;
    --pink: #BE68AB;
    --olive: #92941A;
    --textColor: #E2E3ED;
    --tablet: 768px;

    --maxContent:1080px;
    font-family: sans-serif;
  }
`

const Main = styled.main``

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle theme="prple" />

      <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />

      <Main>{children}</Main>
      {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

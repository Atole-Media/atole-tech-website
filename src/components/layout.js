import * as React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"

import { Navbar } from "./navbar/navbar"
import { Footer } from "./Footer"

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
    color: white;
  }
  a:visited{
    color: white;
  }
  body {
    --niceBlue: #2766A9;
    --purple: #1A042B;
    --lightPurple:#8E40A1;
    --pink: #BE68AB;
    --olive: #92941A;
    --textColor: #E2E3ED;
    --tablet: 768px;
    --yellow: #E8CB51;
    --orange: #FFAB03;
    --red: #D06273;
    --neon: #29CCCB;
    font-family: sans-serif;
    background-color: #1A042B;
  }
`

const Main = styled.main`
  p {
    line-height: 1.5em;
    font-size: 16px;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    text-align: center;
    color: var(--orange);
    margin: 1.25rem 0;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle theme="prple" />

      <Navbar />

      <Main>{children}</Main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

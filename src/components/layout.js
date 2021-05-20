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
    font-family: "freight-big-pro", serif;
  }
  a{
    text-decoration:none;
    color: white;
    font-family: futura-pt, sans-serif;
    font-weight: 400;
    font-style: normal;

  }
  a:visited{
    color: white;
  } 
  body {
    --niceBlue: #2766A9;
    --lightBlue:#BEB8F0;
    --purple: #1A042B;
    --lightPurple:#8E40A1;
    --pink: #F4A4BA;
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
    font-size: 24px;
    color: white;
    font-family: futura-pt, sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  h1 {
    color: var(--orange);
    margin: 1.25rem 0;
    font-family: "itc-benguiat", monospace;
    font-weight: 700;
    font-style: normal;
  }

  h2 {
    font-family: "itc-benguiat", monospace;
    font-weight: 500;
    font-size: 2.5rem;
  }
  h3,
  h4,
  h5 {
    color: var(--orange);
    margin: 1.25rem 0;
    font-family: "itc-benguiat", monospace;
    font-weight: 400;
    font-style: normal;
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

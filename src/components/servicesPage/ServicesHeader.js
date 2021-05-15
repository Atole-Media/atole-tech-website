import styled from "styled-components"
import React from "react"

import { Header } from "../header"
import { StaticImage } from "gatsby-plugin-image"

const HeaderWrapper = styled(Header)`
  h1 {
    left: 10%;
    text-align: center;
  }
  h2 {
    right: 0%;
    text-align: center;
  }
  @media (max-width: 1024px) {
    h1 {
      left: 0;
      right: 0;
    }
  }
`
export const ServicesHeader = () => (
  <HeaderWrapper
    title={
      <>
        <h1 className="textTop">New to atole tech?</h1>
        <br />
        <h2 className="textBottom">Check out our services</h2>
      </>
    }
    image={
      <StaticImage
        src="../../images/services/michael-dziedzic-uZr0oWxrHYs-unsplash.png"
        alt="services splash image"
        layout="fullWidth"
        loading="eager"
        style={{
          minHeight: "100vh",
        }}
      />
    }
  />
)

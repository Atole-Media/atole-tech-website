import styled from "styled-components"
import React from "react"

import { Header } from "../header"
import { StaticImage } from "gatsby-plugin-image"

const HeaderWrapper = styled(Header)`
  h1 {
    left: 10vw;

    text-align: center;
  }
  h2 {
    right: 0%;
    text-align: center;
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
        src="../images/services/michael-dziedzic-uZr0oWxrHYs-unsplash.png"
        alt="services splash image"
      />
    }
  />
)

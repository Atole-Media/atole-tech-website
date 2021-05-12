import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Header } from "../header"

const Wrapper = styled(Header)`
  h1,
  h2 {
    text-align: center;
    left: 0;
    right: 0;
    color: white;
  }
  @media (max-width: 512px) {
    h2 {
      font-size: 4rem;
    }
  }
`

export const AboutHeader = () => (
  <Wrapper
    title={
      <>
        <h1>atole tech </h1>
        <h2>about</h2>
      </>
    }
    image={
      <StaticImage
        src="../../images/about/solen-feyissa-aiuCuOcNG4I-unsplash.png"
        alt="About Splash Image"
        layout="fullWidth"
        loading="eager"
      />
    }
  />
)

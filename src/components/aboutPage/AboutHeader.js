import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Header } from "../header"

const Wrapper = styled(Header)`
  h1 {
    text-align: center;
    left: 0;
    right: 0;
    top: 50%;
    color: white;
  }
`

export const AboutHeader = () => (
  <Wrapper
    title={
      <>
        <h1>
          atole tech <br />
          about
        </h1>
      </>
    }
    image={
      <StaticImage
        src="../../images/about/solen-feyissa-aiuCuOcNG4I-unsplash.png"
        alt="About Splash Image"
        layout="fullWidth"
        placeholder="blurred"
        loading="eager"
        style={{
          height: "100vh",
        }}
      />
    }
  />
)

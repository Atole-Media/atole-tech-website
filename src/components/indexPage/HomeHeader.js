import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Header } from "../header"
import { LinkButton } from "../linkButton"

const Wrapper = styled(Header)`
  h1 {
    right: 20vh;
  }
  h2 {
    right: 20vh;
  }
  .buttons {
    right: 20vh;
  }
  @media (max-width: 1024px) {
    h1 {
      font-size: 3.5rem;
      left: 0;
      right: 0;
    }
    h2 {
      font-size: 2.5rem;
      left: 0;
      right: 0;
    }
    .buttons {
      text-align: center;
      left: 0;
      right: 0;
    }
  }
  @media (max-width: 512px) {
    h1 {
      font-size: 2.5rem;
    }
  }
`

export const HomeHeader = () => (
  <Wrapper
    image={
      <StaticImage
        src="../../images/home/hero.jpg"
        alt="Hero splash!"
        loading="eager"
        layout="fullWidth"
        style={{
          height: "100vh",
        }}
      />
    }
    title={
      <>
        <h1>Take a sip of creativity </h1>
        <h2>and let's do magic!</h2>
      </>
    }
    buttons={
      <>
        <LinkButton background="var(--orange)">Learn More</LinkButton>
        <LinkButton background="var(--lightPurple)">Get Started</LinkButton>
      </>
    }
  />
)

import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Header } from "../header"
import { LinkButton } from "../linkButton"

const Wrapper = styled(Header)`
  padding-bottom: 5rem;
  h1 {
    left: 20vh;
    display: block;
  }
  span {
    color: white;
  }
  h2 {
    left: 25vh;
  }
  .buttons {
    right: 20vh;
  }
  margin-bottom: 3rem;
  @media (max-width: 1024px) {
    h1 {
      left: 0;
      right: 0;
    }
    h2 {
      left: 0;
      right: 0;
      top: 65%;
    }
    .buttons {
      left: 0;
      right: 0;
      top: 80%;
    }
  }
  @media (max-width: 512px) {
    h1 {
      top: 35%;
    }
    h2 {
      top: 55%;
    }
    .buttons {
      top: 70%;
      width: 80%;
      margin: 0 auto;
    }
  }
`

export const HomeHeader = () => (
  <Wrapper
    image={
      <StaticImage
        src="../../images/home/hero@3x.png"
        alt="Hero splash!"
        loading="eager"
        placeholder="blurred"
        layout="fullWidth"
        style={{
          height: "100vh",
        }}
      />
    }
    title={
      <>
        <h1>
          Take a sip of creativity <br />
          <span>let's do magic!</span>
        </h1>
        {/* <h2> </h2> */}
      </>
    }
    buttons={
      <>
        <LinkButton background="var(--orange)" hover="var(--orange)">
          Learn More
        </LinkButton>
        <LinkButton background="var(--lightPurple)">Get Started</LinkButton>
      </>
    }
  />
)

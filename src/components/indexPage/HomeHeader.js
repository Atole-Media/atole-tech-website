import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Header } from "../header"
import { LinkButton } from "../linkButton"

const Wrapper = styled(Header)``

export const HomeHeader = () => (
  <Wrapper
    image={
      <StaticImage
        src="../images/home/hero.jpg"
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
